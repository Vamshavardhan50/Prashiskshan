import { useState } from "react";
import { GraduationCap, Lock, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import GlobalControls from "./GlobalControls";

const Login = () => {
  const [email, 
    setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const { isDark } = useTheme();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password, role });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 text-green-900 dark:text-white px-4 transition-colors duration-300 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-green-700 dark:text-green-400" />
            <h2 className="ml-2 text-2xl font-bold">
              {t("login.title", "Login")}
            </h2>
          </div>

          {/* Global Controls */}
          <GlobalControls />
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("login.loginAs", "Login as")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  role === "student"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {t("login.student", "Student")}
              </button>
              <button
                type="button"
                onClick={() => setRole("faculty")}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  role === "faculty"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {t("login.faculty", "Faculty")}
              </button>
              <button
                type="button"
                onClick={() => setRole("industry")}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  role === "industry"
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {t("login.industry", "Industry")}
              </button>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("login.email", "Email")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                placeholder={t("login.emailPlaceholder", "you@example.com")}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("login.password", "Password")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
                placeholder={t("login.passwordPlaceholder", "••••••••")}
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors font-semibold"
          >
            {t("login.loginButton", "Login")}
          </button>

          {/* Register Link */}
          <div className="text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {t("login.noAccount", "Don't have an account?")}
            </span>{" "}
            <a
              href="/register"
              className="text-green-700 dark:text-green-400 hover:underline font-semibold"
            >
              {t("login.registerHere", "Register here")}
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            {t(
              "login.disclaimer",
              "By logging in, you agree to our NEP-compliant data policy."
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
