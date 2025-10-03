import { WifiOff, RefreshCw } from "lucide-react";

const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <WifiOff className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            You're Offline
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            It looks like you've lost your internet connection. Don't worry, you
            can still access some features of Prashikshan while offline.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Available offline features:</p>
            <ul className="mt-2 space-y-1">
              <li>• View cached pages</li>
              <li>• Access saved forms</li>
              <li>• Browse previous content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
