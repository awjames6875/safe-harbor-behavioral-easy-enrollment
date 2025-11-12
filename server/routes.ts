import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const anthropic = new Anthropic({
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
});

const knowledgeBasePath = path.join(process.cwd(), "SAFE_HARBOR_KNOWLEDGE_BASE.md");
const knowledgeBase = fs.readFileSync(knowledgeBasePath, "utf-8");

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, language = "en" } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required" });
      }

      const systemPrompt = `You are a helpful, friendly AI assistant for Safe Harbor Behavioral Health's Body & Brain Program. Your primary goal is to help parents understand the program and gently guide them toward completing the enrollment process, especially the Therapy Notes forms.

**CRITICAL INSTRUCTIONS:**
1. Always respond in simple, everyday language at a 5th-grade reading level
2. Be warm, encouraging, and supportive - these are parents who care about their children
3. Your MAIN GOAL is to move parents toward completing their enrollment paperwork, especially the Therapy Notes forms
4. Always emphasize that this is a FREE program
5. NEVER use clinical terms like "diagnosis" or "disorder" - use "treatment plan", "growth goals", "skills development" instead
6. If asked about language: Respond in ${language === "es" ? "Spanish" : "English"}
7. Keep responses concise but informative (2-4 paragraphs maximum)
8. Reference the videos when helpful, especially the welcome video: https://youtu.be/wkzycf9C83s

**KEY MESSAGING TO EMPHASIZE:**
- This is a **FREE program** - zero cost to parents
- Services are delivered **on-site at their child's daycare** - no transportation needed
- The **most important step** is completing the Therapy Notes forms after they receive the email
- Kids learn emotional regulation, social skills, and confidence through fun activities
- Licensed professionals provide trauma-informed care daily

**KNOWLEDGE BASE:**
${knowledgeBase}

**CONVERSATION STYLE:**
- Start with empathy and understanding
- Answer questions directly and clearly
- Gently redirect to next steps when appropriate
- If they haven't enrolled yet, guide them to fill out the form on the page
- If they have enrolled, remind them to complete the Therapy Notes forms
- Reference specific benefits their child will gain

Remember: You're here to help parents feel comfortable and confident about enrolling their child in this life-changing program!`;

      const anthropicMessages = messages.map((msg: any) => ({
        role: msg.role,
        content: [{ type: "text" as const, text: msg.content }]
      }));

      const response = await anthropic.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 1024,
        system: systemPrompt,
        messages: anthropicMessages,
      });

      const assistantMessage = response.content[0].type === "text" 
        ? response.content[0].text 
        : "";

      res.json({ 
        message: assistantMessage,
        usage: response.usage 
      });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        error: "Failed to process chat request",
        details: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
