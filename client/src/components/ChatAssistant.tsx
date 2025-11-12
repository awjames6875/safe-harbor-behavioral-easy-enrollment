import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import assistantAvatar from "@assets/generated_images/friendly_customer_service_representative_5ad4b82f.png";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatAssistantProps {
  language: "en" | "es";
}

function parseMessageWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[hsl(var(--primary))] font-medium break-all"
          data-testid={`link-chat-url-${index}`}
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function ChatAssistant({ language }: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: "Chat with Safe Harbor Assistant",
      placeholder: "Ask about our program...",
      initialMessage: "Hi! I'm here to help you learn about our FREE Body & Brain Program for your child. What questions do you have?",
      sending: "Sending...",
      widgetGreeting: "Need Help?",
      widgetSubtext: "Chat with us!",
    },
    es: {
      title: "Chat con Asistente de Safe Harbor",
      placeholder: "Pregunte sobre nuestro programa...",
      initialMessage: "¡Hola! Estoy aquí para ayudarle a conocer nuestro programa GRATIS Body & Brain para su hijo. ¿Qué preguntas tiene?",
      sending: "Enviando...",
      widgetGreeting: "¿Necesita Ayuda?",
      widgetSubtext: "¡Chatea con nosotros!",
    },
  };

  const t = translations[language];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content: t.initialMessage,
        },
      ]);
    }
  }, [isOpen, messages.length, t.initialMessage]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const chatMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      return response.json();
    },
    onMutate: (userMessage) => {
      setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
      setInput("");
    },
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: language === "es" 
            ? "Lo siento, hubo un error. Por favor, intente de nuevo." 
            : "Sorry, there was an error. Please try again.",
        },
      ]);
    },
  });

  const handleSend = () => {
    if (input.trim() && !chatMutation.isPending) {
      chatMutation.mutate(input.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          data-testid="button-open-chat"
          className="fixed bottom-6 right-6 z-50 group cursor-pointer animate-bounce-subtle"
        >
          <div className="flex items-center gap-3 bg-white dark:bg-card rounded-2xl shadow-2xl p-3 pr-5 hover-elevate active-elevate-2 border-2 border-[hsl(var(--primary))]">
            <div className="relative">
              <img
                src={assistantAvatar}
                alt="Safe Harbor Assistant"
                className="w-16 h-16 rounded-full object-cover border-2 border-[hsl(var(--primary))]"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-[hsl(var(--foreground))] text-base">
                {t.widgetGreeting}
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                {t.widgetSubtext}
              </p>
            </div>
            <MessageCircle className="w-5 h-5 text-[hsl(var(--primary))] ml-1" />
          </div>
        </button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
            <CardTitle className="text-lg font-semibold">{t.title}</CardTitle>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              data-testid="button-close-chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-hidden p-0">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="space-y-2">
                {messages.map((message, index) => {
                  const variant = message.role === "user" ? "sent" : "received";
                  return (
                    <ChatBubble 
                      key={index} 
                      variant={variant}
                      data-testid={`message-${message.role}-${index}`}
                    >
                      <ChatBubbleAvatar 
                        src={message.role === "assistant" ? assistantAvatar : undefined}
                        fallback={message.role === "user" ? "U" : "SH"}
                      />
                      <ChatBubbleMessage variant={variant}>
                        <p className="text-sm whitespace-pre-wrap">
                          {parseMessageWithLinks(message.content)}
                        </p>
                      </ChatBubbleMessage>
                    </ChatBubble>
                  );
                })}
                {chatMutation.isPending && (
                  <ChatBubble variant="received">
                    <ChatBubbleAvatar 
                      src={assistantAvatar}
                      fallback="SH"
                    />
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter className="border-t pt-4">
            <div className="flex w-full gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.placeholder}
                disabled={chatMutation.isPending}
                className="flex-1"
                data-testid="input-chat-message"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={!input.trim() || chatMutation.isPending}
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
