import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if app is already installed (running in standalone mode)
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(standalone);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e);
      // Show our custom install prompt
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for app installed event
    const handleAppInstalled = () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      console.log("PWA was installed");
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      // Clear the deferredPrompt variable
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Store in localStorage to not show again for a while
    localStorage.setItem("installPromptDismissed", Date.now().toString());
  };

  // Don't show if already installed or dismissed recently
  useEffect(() => {
    const dismissedTime = localStorage.getItem("installPromptDismissed");
    if (dismissedTime) {
      const daysSinceDismissed =
        (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        // Don't show for 7 days after dismissal
        setShowInstallPrompt(false);
      }
    }
  }, []);

  // Don't render if app is already installed or if we shouldn't show the prompt
  if (isStandalone || (!showInstallPrompt && !isIOS)) {
    return null;
  }

  return (
    <>
      {/* Install prompt for Chrome/Edge */}
      {showInstallPrompt && deferredPrompt && (
        <div className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Download className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Install Prashikshan
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Install our app for a better experience with offline access and
                notifications.
              </p>
              <div className="flex space-x-2 mt-3">
                <button
                  onClick={handleInstallClick}
                  className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors"
                >
                  Install
                </button>
                <button
                  onClick={handleDismiss}
                  className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-xs font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Install instructions for iOS */}
      {isIOS && !isStandalone && (
        <div className="fixed bottom-4 left-4 right-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Download className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Install Prashikshan
              </h3>
              <p className="text-xs text-blue-700 dark:text-blue-200 mt-1">
                Tap the share button <span className="font-mono">⬆️</span> and
                then "Add to Home Screen" to install our app.
              </p>
              <button
                onClick={handleDismiss}
                className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors mt-2"
              >
                Got it
              </button>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-blue-400 hover:text-blue-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallPrompt;
