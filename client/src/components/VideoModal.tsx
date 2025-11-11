import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: "en" | "es";
}

const content = {
  en: {
    title: "Safe Harbor Day Care Video",
  },
  es: {
    title: "Video de Guardería Safe Harbor",
  },
};

export default function VideoModal({ open, onOpenChange, language }: VideoModalProps) {
  const t = content[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-black border-2 border-primary overflow-hidden" data-testid="dialog-video">
        <DialogHeader className="sr-only">
          <DialogTitle>{t.title}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/wkzycf9C83s?si=wu5W3OEtQMS2CzRH"
            title={t.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            data-testid="iframe-video"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
