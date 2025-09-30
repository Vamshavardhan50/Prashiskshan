import { useState } from "react";
import { GraduationCap, Lock, Mail, Languages, Moon, Sun } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("English");

  const translations = {
    English: {
      title: "Login",
      loginAs: "Login as",
      student: "Student",
      faculty: "Faculty",
      industry: "Industry Partner",
      email: "Email",
      emailPlaceholder: "you@example.com",
      password: "Password",
      passwordPlaceholder: "",
      loginButton: "Login",
      noAccount: "Don't have an account?",
      registerHere: "Register here",
      disclaimer: "By logging in, you agree to our NEP-compliant data policy.",
    },
    हनद: {
      title: "लगन",
      loginAs: "लगन कर",
      student: "छतर",
      faculty: "सकय",
      industry: "उदयग सझदर",
      email: "ईमल",
      emailPlaceholder: "you@example.com",
      password: "पसवरड",
      passwordPlaceholder: "",
      loginButton: "लगन कर",
      noAccount: "कई खत नह ह?",
      registerHere: "यह पजकरण कर",
      disclaimer: "लगन करक, आप हमर NEP-अनपलत डट नत स सहमत ह",
    },
    తలగ: {
      title: "పరశకషణ లగన",
      loginAs: "లగన చయడ",
      student: "వదయరథ",
      faculty: "అధయపకల",
      industry: "పరశరమ భగసవమ",
      email: "ఇమయల",
      emailPlaceholder: "you@example.com",
      password: "పసవరడ",
      passwordPlaceholder: "",
      loginButton: "లగన చయడ",
      noAccount: "ఖత లద?",
      registerHere: "ఇకకడ నమద చయడ",
      disclaimer: "లగన చయడ దవర, మర మ NEP-అనకల డట వధననక అగకరసతననర",
    },
    اردو: {
      title: "پرشکشن لاگ ان",
      loginAs: "لاگ ان کریں",
      student: "طالب علم",
      faculty: "استاد",
      industry: "صنعتی شراکت دار",
      email: "ای میل",
      emailPlaceholder: "you@example.com",
      password: "پاس ورڈ",
      passwordPlaceholder: "",
      loginButton: "لاگ ان کریں",
      noAccount: "اکاؤنٹ نہیں ہے",
      registerHere: "یہاں رجسٹر کریں",
      disclaimer:
        "لاگ ان کرنے سے آپ ہماری NEP-مطابقت پذیر ڈیٹا پالیسی سے اتفاق کرتے ہیں",
    },
  };

  const t = translations[language];

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password, role });
  };

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 text-green-900 dark:text-white px-4 transition-colors duration-300`}
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-green-700 dark:text-green-400" />
            <h2 className="ml-2 text-2xl font-bold">{t.title}</h2>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative group">
              <button className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg transition-all text-sm">
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline text-xs">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-10">
                <button
                  onClick={() => setLanguage("English")}
                  className="block w-full text-left px-3 py-2 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("हनद")}
                  className="block w-full text-left px-3 py-2 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  हनद
                </button>
                <button
                  onClick={() => setLanguage("తలగ")}
                  className="block w-full text-left px-3 py-2 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  తలగ
                </button>
                <button
                  onClick={() => setLanguage("اردو")}
                  className="block w-full text-left px-3 py-2 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors text-sm"
                >
                  اردو
                </button>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg transform hover:rotate-180 transition-all duration-500"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {t.loginAs}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="student">{t.student}</option>
              <option value="faculty">{t.faculty}</option>
              <option value="industry">{t.industry}</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t.email}</label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all">
              <Mail className="h-5 w-5 mx-2 text-green-600 dark:text-green-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-2 bg-transparent outline-none dark:text-white"
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              {t.password}
            </label>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all">
              <Lock className="h-5 w-5 mx-2 text-green-600 dark:text-green-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-2 bg-transparent outline-none dark:text-white"
                placeholder={t.passwordPlaceholder}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 dark:bg-green-600 text-white py-2 rounded-md hover:bg-green-800 dark:hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t.loginButton}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.noAccount}
            <a
              href="/register"
              className="text-green-700 dark:text-green-400 font-medium ml-1 hover:underline transition-colors"
            >
              {t.registerHere}
            </a>
          </p>
        </div>

        <p className="text-xs text-center mt-4 text-gray-500 dark:text-gray-400">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Login;
