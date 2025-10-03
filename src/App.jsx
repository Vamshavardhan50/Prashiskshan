import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppProvider";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import PWAUpdatePrompt from "./components/PWAUpdatePrompt";

function App() {
  return (
    <AppProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          {/* PWA Components */}
          <PWAInstallPrompt />
          <PWAUpdatePrompt />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
