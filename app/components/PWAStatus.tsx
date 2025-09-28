import { useState, useEffect } from "react";
import { Download, Smartphone } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function PWAStatus() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const isStandalone =
      ("standalone" in window.navigator && (window.navigator as any).standalone) ||
      window.matchMedia("(display-mode: standalone)").matches;

    if (isStandalone) {
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Hide install prompt if already installed
    window.addEventListener('appinstalled', () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Auto-close install prompt after 7 seconds
  useEffect(() => {
    if (showInstallPrompt) {
      const timer = setTimeout(() => {
        setShowInstallPrompt(false);
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [showInstallPrompt]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  return (
    <>
      {/* Install Prompt - Positioned separately */}
      {showInstallPrompt && (
        <div className="fixed top-3 right-3 z-40 mt-10">
          <Card className="p-3 max-w-xs bg-blue-50 border-blue-200 shadow-lg">
            <div className="flex items-start gap-2">
              <Smartphone className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-blue-900 mb-1">
                  Install App
                </p>
                <p className="text-xs text-blue-700 mb-2">
                  This site works in your browser even if you're offline, add to home screen for quick access.
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleInstallClick}
                    className="h-6 text-xs px-2 bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Install
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowInstallPrompt(false)}
                    className="h-6 text-xs px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}