import {
  GraduationCap,
  BookOpen,
  Smartphone,
  Users,
  ShieldCheck,
  Rocket,
  Languages,
  BadgeCheck,
  Moon,
  Sun,
  TrendingUp,
  Target,
  Award,
  MapPin,
  Clock,
  BarChart3,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import GlobalControls from "./GlobalControls";

const Landing = () => {
  const { isDark } = useTheme();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const [konamiProgress, setKonamiProgress] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === konamiCode[konamiProgress]) {
        setKonamiProgress(konamiProgress + 1);
        if (konamiProgress + 1 === konamiCode.length) {
          setEasterEggActive(true);
          setTimeout(() => {
            setEasterEggActive(false);
            setKonamiProgress(0);
          }, 8000);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [konamiProgress]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Easter Egg Overlay */}
      {easterEggActive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-70 animate-pulse"></div>
          <div className="relative text-center animate-bounce">
            <div className="text-6xl mb-4">🎉🚀✨</div>
            <h1 className="text-5xl font-bold text-green-400 mb-4 animate-pulse">
              Prashikshan Squad = 🔥
            </h1>
            <p className="text-2xl text-white mb-2">
              You found the secret code!
            </p>
            <p className="text-lg text-green-300">
              Building the future of education, one internship at a time 💚
            </p>
            <div className="mt-4 text-4xl animate-spin">🎓</div>
          </div>
        </div>
      )}

      {/* Custom Cursor Trail */}
      {isHovering && (
        <div
          className="fixed w-4 h-4 bg-green-500 rounded-full pointer-events-none z-40 transition-all duration-100"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: 0.6,
          }}
        ></div>
      )}

      {/* Navbar */}
      <header className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white shadow-xl sticky top-0 z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 cursor-pointer transform hover:scale-105 transition-transform group">
              <div className="bg-white bg-opacity-20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-opacity-30 transition-all">
                <GraduationCap className="h-8 w-8 animate-pulse" />
              </div>
              <div>
                <span className="font-bold text-2xl tracking-wide block">
                  Prashikshan
                </span>
                <span className="text-xs text-green-200 dark:text-gray-400">
                  NEP 2020 Verified Platform
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-white hover:text-green-200 transition-colors font-medium relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#how-it-works"
                className="text-white hover:text-green-200 transition-colors font-medium relative group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#guide"
                className="text-white hover:text-green-200 transition-colors font-medium relative group"
              >
                Guide
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#faq"
                className="text-white hover:text-green-200 transition-colors font-medium relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Right Section - Language, Theme, Auth */}
            <div className="flex items-center space-x-4">
              {/* Global Controls (Language + Theme) */}
              <GlobalControls className="text-white [&>div>button]:bg-white [&>div>button]:bg-opacity-20 [&>div>button]:hover:bg-opacity-30 [&>div>button]:backdrop-blur-sm" />

              {/* Auth Buttons */}
              <button className="hidden sm:block bg-white text-green-800 px-5 py-2 rounded-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all shadow-md">
                <a href="/login">{t("nav.login", "Login")}</a>
              </button>
              <button className="hidden sm:block bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-500 transform hover:scale-105 transition-all shadow-md">
                <a href="/register">{t("nav.register", "Register")}</a>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-32 max-w-7xl mx-auto gap-8">
        <div
          className="text-center md:text-left"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="text-5xl font-bold mb-4 transform hover:scale-105 transition-transform leading-tight">
            {t("landing.heroTitle", "Solving India's Internship Crisis")}
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            {t(
              "landing.heroDescription",
              "NEP 2020-compliant platform connecting students, colleges, and verified industries - eliminating fake internships and skill gaps across India."
            )}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold">
              <a href="#choose-role">
                {t("landing.getStarted", "Get Started")}
              </a>
            </button>
            <button className="bg-white text-green-700 border-2 border-green-700 px-8 py-4 rounded-lg hover:bg-green-50 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 font-semibold">
              {t("landing.learnMore", "Learn More")}
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-80 bg-gradient-to-br from-green-200 to-green-400 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 transform hover:rotate-2 hover:scale-105 transition-all duration-500">
            <Rocket className="h-32 w-32 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform">
            The Problem We're Solving
          </h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
            Why NEP 2020 internships are failing in Indian colleges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProblemCard
              number="01"
              title="Fake Internships"
              description="Certificate mills and non-functional organizations selling fake internship certificates to students"
            />
            <ProblemCard
              number="02"
              title="No Industry Tie-ups"
              description="Colleges lack proper MoUs and partnerships, especially in rural and tier-2/3 cities"
            />
            <ProblemCard
              number="03"
              title="Skill Gap Crisis"
              description="Students aren't industry-ready - companies refuse to take interns without basic skills"
            />
            <ProblemCard
              number="04"
              title="Zero Monitoring"
              description="No faculty supervision, tracking, or validation of internship work and learning outcomes"
            />
          </div>
        </div>
      </section>

      {/* Choose Your Role Section */}
      <section
        className="bg-white dark:bg-gray-800 py-16 px-6"
        id="choose-role"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform">
            Choose Your Role
          </h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
            Get started with the platform based on your role and requirements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoleCard
              icon={<GraduationCap />}
              title="Student"
              features={[
                "Apply to verified, badge-rated companies",
                "Generate NEP logbooks & reports",
                "Earn skill badges before internships",
              ]}
              buttonText="Student Login"
              gradient="from-blue-500 to-cyan-500"
              hoverGradient="from-blue-600 to-cyan-600"
            />
            <RoleCard
              icon={<Users />}
              title="Faculty"
              features={[
                "Monitor real-time student progress",
                "Map Semester 5 NEP credits instantly",
                "Mentor remotely via dashboard",
              ]}
              buttonText="Faculty Login"
              gradient="from-purple-500 to-pink-500"
              hoverGradient="from-purple-600 to-pink-600"
            />
            <RoleCard
              icon={<Rocket />}
              title="Industry"
              features={[
                "Get Bronze/Silver/Gold verified badge",
                "Access skill-ready students",
                "Manage interns with live dashboards",
              ]}
              buttonText="Industry Login"
              gradient="from-orange-500 to-red-500"
              hoverGradient="from-orange-600 to-red-600"
            />
          </div>

          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <span className="text-green-700 dark:text-green-400 font-semibold cursor-pointer hover:underline transition-all">
              Contact your institution
            </span>{" "}
            or{" "}
            <span className="text-green-700 dark:text-green-400 font-semibold cursor-pointer hover:underline transition-all">
              reach out to us
            </span>
          </p>
        </div>
      </section>

      {/* How Verification Works */}
      <section
        id="how-it-works"
        className="bg-green-50 dark:bg-gray-900 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform">
            How Company Verification Works
          </h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
            3-tier badge system powered by automation + ML fraud detection
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VerificationBadge
              badge="🥉 Bronze"
              color="from-orange-400 to-orange-600"
              checks={[
                "Phone OTP verification",
                "Official email domain check",
                "Website & WHOIS validation",
                "Quick GST/Udyam lookup",
              ]}
              time="Instant"
            />
            <VerificationBadge
              badge="🥈 Silver"
              color="from-gray-400 to-gray-600"
              checks={[
                "Company registration docs",
                "Bank micro-deposit confirmed",
                "LinkedIn company page verified",
                "Signed digital MoU",
              ]}
              time="Few Hours"
            />
            <VerificationBadge
              badge="🥇 Gold"
              color="from-yellow-400 to-yellow-600"
              checks={[
                "College MoU verified",
                "Physical office verification",
                "Third-party reference checks",
                "Government API integration",
              ]}
              time="2-3 Days"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-6 py-16 max-w-7xl mx-auto bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <h2 className="text-4xl font-bold mb-4 text-center transform hover:scale-105 transition-transform">
          Platform Features
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
          Everything you need for seamless internship management
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Feature
            icon={<ShieldCheck />}
            title="3-Tier Verification Engine"
            description="Bronze, Silver, Gold badges for companies using GST, Udyam, bank verification, and ML fraud detection - stopping fake internships."
          />
          <Feature
            icon={<Clock />}
            title="Smart Logbooks"
            description="Geo-tagged, time-stamped daily logs with auto-generated NEP-compliant reports - no more fake certificates."
          />
          <Feature
            icon={<BarChart3 />}
            title="Real-Time Dashboards"
            description="Students, faculty, and industries get live tracking with automated progress reports and analytics."
          />
          <Feature
            icon={<BadgeCheck />}
            title="Skill Pre-Badging"
            description="Students complete AI-graded skill tests before internships - ensuring industry-ready candidates."
          />
          <Feature
            icon={<Target />}
            title="Outcome Mapping"
            description="Automatically maps internship work to NEP credits, outcomes, and AICTE reporting formats."
          />
          <Feature
            icon={<Award />}
            title="NEP Compliance Guarantee"
            description="End-to-end process mapped to NEP 2020, UGC, and AICTE internship guidelines with zero fake entries."
          />
        </div>
      </section>

      {/* Student Guide Section */}
      <section id="guide" className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform">
            Student Guide to Internships
          </h2>
          <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
            Simple 4-step process for verified, NEP-compliant internships
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <GuideStep
              step="1"
              title="Choose Company"
              description="Pick from Bronze, Silver, or Gold verified organizations."
              icon={<MapPin />}
            />
            <GuideStep
              step="2"
              title="Skill Badge"
              description="Clear quick pre-tests to unlock eligibility for internships."
              icon={<Award />}
            />
            <GuideStep
              step="3"
              title="Internship Logs"
              description="Fill daily auto-tracked logs with real-time monitoring."
              icon={<BookOpen />}
            />
            <GuideStep
              step="4"
              title="Auto Reports"
              description="Download NEP-ready reports mapped to semester credits."
              icon={<TrendingUp />}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 bg-green-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 transform hover:scale-105 transition-transform">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mt-12">
            <FAQItem
              question="How does your platform stop fake internships?"
              answer="Every company goes through 3-step badge verification (Bronze, Silver, Gold) with document, bank, and government validation. This ensures only legitimate organizations are listed."
            />
            <FAQItem
              question="Are these internships valid for NEP 2020 credits?"
              answer="Yes. All logs, reports, and mappings are auto-aligned with NEP 2020 and AICTE internship frameworks, making them 100% credit-compliant."
            />
            <FAQItem
              question="How do rural and small colleges benefit?"
              answer="Colleges without industry tie-ups can still provide verified internships to their students by leveraging our national-level verified company database."
            />
            <FAQItem
              question="What about faculty monitoring?"
              answer="Faculty get live dashboards to track student logs, approve progress, and map outcomes. No more manual paperwork or fake approvals."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Prashikshan</span>
            </div>
            <p className="text-sm text-green-200 dark:text-gray-400">
              Verified internship platform aligned with NEP 2020 — connecting
              students, colleges, and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-green-200 dark:text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-white transition-colors">
                  Guide
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-green-200 dark:text-gray-400 text-sm">
              <li>Email: support@prashikshan.in</li>
              <li>Phone: +91 987xxxxxx10</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-green-800 dark:border-gray-700 pt-6 text-center text-sm text-green-300 dark:text-gray-500">
          © {new Date().getFullYear()} Prashikshan. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

/* Reusable Components */

const ProblemCard = ({ number, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-red-500">
    <div className="text-2xl font-bold text-red-500 mb-2">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const RoleCard = ({
  icon,
  title,
  features,
  buttonText,
  gradient,
  hoverGradient,
}) => (
  <div
    className={`bg-gradient-to-br ${gradient} text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8`}
  >
    <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3 mb-6">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-start space-x-2 text-sm md:text-base"
        >
          <span className="mt-1">✅</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="/login">
      <button
        className={`bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all w-full`}
      >
        {buttonText}
      </button>
    </a>
  </div>
);

const VerificationBadge = ({ badge, color, checks, time }) => (
  <div
    className={`bg-gradient-to-br ${color} text-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
  >
    <h3 className="text-2xl font-bold mb-4">{badge}</h3>
    <ul className="space-y-3 mb-6">
      {checks.map((check, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <span className="mt-1">✅</span>
          <span>{check}</span>
        </li>
      ))}
    </ul>
    <p className="text-sm">Verification Time: {time}</p>
  </div>
);

const Feature = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500">
    <div className="text-green-700 dark:text-green-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const GuideStep = ({ step, title, description, icon }) => (
  <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-green-500">
    <div className="flex items-center mb-4">
      <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
        {step}
      </div>
      <div className="ml-4 text-green-700 dark:text-green-400">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
    <h3 className="font-semibold text-lg mb-2">{question}</h3>
    <p className="text-gray-600 dark:text-gray-400">{answer}</p>
  </div>
);

export default Landing;
