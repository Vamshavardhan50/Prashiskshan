// PWA Utilities
export const isPWAInstalled = () => {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
};

export const isOnline = () => {
  return navigator.onLine;
};

export const addToHomeScreen = async (deferredPrompt) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    return outcome === "accepted";
  }
  return false;
};

export const registerSW = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("SW registered: ", registration);
      return registration;
    } catch (registrationError) {
      console.log("SW registration failed: ", registrationError);
    }
  }
};

export const checkForUpdates = async () => {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      registration.update();
    }
  }
};

export const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }
  return false;
};

export const sendNotification = (title, options = {}) => {
  if ("Notification" in window && Notification.permission === "granted") {
    return new Notification(title, {
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-192x192.png",
      ...options,
    });
  }
};

export const shareContent = async (data) => {
  if (navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch (error) {
      console.log("Error sharing:", error);
    }
  }
  return false;
};

// Check if device is iOS
export const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

// Check if device is Android
export const isAndroid = () => {
  return /Android/.test(navigator.userAgent);
};

// Check if PWA can be installed
export const canInstallPWA = () => {
  return !isPWAInstalled() && (isAndroid() || isIOS());
};

// Analytics for PWA events
export const trackPWAEvent = (eventName, data = {}) => {
  // You can integrate with your analytics service here
  console.log("PWA Event:", eventName, data);

  // Example for Google Analytics
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, {
      event_category: "PWA",
      ...data,
    });
  }
};
