import { useEffect, useState } from "react";
import { RefreshCw, X } from "lucide-react";

const PWAUpdatePrompt = () => {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  useEffect(() => {
    // Check if service worker is supported
    if ("serviceWorker" in navigator) {
      // Listen for service worker updates
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });

      // Check for waiting service worker
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration && registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowUpdatePrompt(true);
        }

        // Listen for new service worker
        registration?.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                setWaitingWorker(newWorker);
                setShowUpdatePrompt(true);
              }
            });
          }
        });
      });
    }
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      setShowUpdatePrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowUpdatePrompt(false);
  };

  if (!showUpdatePrompt) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg shadow-lg p-4 z-50 max-w-sm mx-auto">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <RefreshCw className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100">
            App Update Available
          </h3>
          <p className="text-xs text-blue-700 dark:text-blue-200 mt-1">
            A new version of Prashikshan is available. Update now for the latest
            features and improvements.
          </p>
          <div className="flex space-x-2 mt-3">
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors"
            >
              Update Now
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
          className="flex-shrink-0 text-blue-400 hover:text-blue-500"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PWAUpdatePrompt;
