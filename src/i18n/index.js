import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      // Common
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      search: "Search",
      filter: "Filter",
      next: "Next",
      previous: "Previous",
      close: "Close",

      // App Name & Branding
      appName: "Prashikshan",
      appTagline: "NEP 2020 Verified Platform",
      appDescription:
        "Verified internship platform aligned with NEP 2020 — connecting students, colleges, and industries.",

      // Navigation
      nav: {
        home: "Home",
        features: "Features",
        howItWorks: "How It Works",
        guide: "Guide",
        faq: "FAQ",
        login: "Login",
        register: "Register",
        logout: "Logout",
      },

      // Landing Page
      landing: {
        heroTitle: "Solving India's Internship Crisis",
        heroDescription:
          "NEP 2020-compliant platform connecting students, colleges, and verified industries - eliminating fake internships and skill gaps across India.",
        getStarted: "Get Started",
        learnMore: "Learn More",
        problemTitle: "The Problem We're Solving",
        problemSubtitle:
          "Why NEP 2020 internships are failing in Indian colleges",
        chooseRoleTitle: "Choose Your Role",
        chooseRoleSubtitle:
          "Get started with the platform based on your role and requirements",
        verificationTitle: "How Company Verification Works",
        verificationSubtitle:
          "3-tier badge system powered by automation + ML fraud detection",
        featuresTitle: "Platform Features",
        featuresSubtitle:
          "Everything you need for seamless internship management",
        guideTitle: "Student Guide to Internships",
        guideSubtitle:
          "Simple 4-step process for verified, NEP-compliant internships",
        faqTitle: "Frequently Asked Questions",
      },

      // Roles
      roles: {
        student: "Student",
        faculty: "Faculty",
        industry: "Industry Partner",
      },

      // Student Section
      student: {
        title: "Student",
        features: [
          "Apply to verified, badge-rated companies",
          "Auto-generate NEP logbooks & reports",
          "Earn skill badges before internships",
        ],
        loginButton: "Student Login",
      },

      // Faculty Section
      faculty: {
        title: "Faculty",
        features: [
          "Monitor real-time student progress",
          "Map Semester 5 NEP credits instantly",
          "Mentor remotely via dashboard",
        ],
        loginButton: "Faculty Login",
      },

      // Industry Section
      industry: {
        title: "Industry",
        features: [
          "Get Bronze/Silver/Gold verified badge",
          "Access pre-trained, skill-ready students",
          "Manage interns with live dashboards",
        ],
        loginButton: "Industry Login",
      },

      // Login Page
      login: {
        title: "Login",
        loginAs: "Login as",
        student: "Student",
        faculty: "Faculty",
        industry: "Industry Partner",
        email: "Email",
        emailPlaceholder: "you@example.com",
        password: "Password",
        passwordPlaceholder: "••••••••",
        loginButton: "Login",
        noAccount: "Don't have an account?",
        registerHere: "Register here",
        disclaimer:
          "By logging in, you agree to our NEP-compliant data policy.",
        forgotPassword: "Forgot password?",
      },

      // Register Page
      register: {
        title: "Create Account",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        role: "Select Role",
        institution: "Institution/Organization",
        registerButton: "Create Account",
        haveAccount: "Already have an account?",
        loginHere: "Login here",
        terms:
          "By creating an account, you agree to our Terms of Service and Privacy Policy.",
      },

      // Problems
      problems: {
        fakeInternships: {
          title: "Fake Internships",
          description:
            "Certificate mills and non-functional organizations selling fake internship certificates to students",
        },
        noTieups: {
          title: "No Industry Tie-ups",
          description:
            "Colleges lack proper MoUs and partnerships, especially in rural and tier-2/3 cities",
        },
        skillGap: {
          title: "Skill Gap Crisis",
          description:
            "Students aren't industry-ready - companies refuse to take interns without basic skills",
        },
        noMonitoring: {
          title: "Zero Monitoring",
          description:
            "No faculty supervision, tracking, or validation of internship work and learning outcomes",
        },
      },

      // Verification Badges
      verification: {
        bronze: {
          title: "🥉 Bronze",
          time: "Instant",
          checks: [
            "Phone OTP verification",
            "Official email domain check",
            "Website & WHOIS validation",
            "Quick GST/Udyam lookup",
          ],
        },
        silver: {
          title: "🥈 Silver",
          time: "Few Hours",
          checks: [
            "Company registration docs",
            "Bank micro-deposit confirmed",
            "LinkedIn company page verified",
            "Signed digital MoU",
          ],
        },
        gold: {
          title: "🥇 Gold",
          time: "2-3 Days",
          checks: [
            "College MoU verified",
            "Physical office verification",
            "Third-party reference checks",
            "Government API integration",
          ],
        },
      },

      // Features
      features: {
        verification: {
          title: "3-Tier Verification Engine",
          description:
            "Bronze, Silver, Gold badges for companies using GST, Udyam, bank verification, and ML fraud detection - stopping fake internships.",
        },
        logbooks: {
          title: "Smart Logbooks",
          description:
            "Geo-tagged, time-stamped daily logs with auto-generated NEP-compliant reports - no more fake certificates.",
        },
        dashboards: {
          title: "Real-Time Dashboards",
          description:
            "Students, faculty, and industries get live tracking with automated progress reports and analytics.",
        },
        prebadging: {
          title: "Skill Pre-Badging",
          description:
            "Students complete AI-graded skill tests before internships - ensuring industry-ready candidates.",
        },
        outcomeMapping: {
          title: "Outcome Mapping",
          description:
            "Automatically maps internship work to NEP credits, outcomes, and AICTE reporting formats.",
        },
        nepCompliance: {
          title: "NEP Compliance Guarantee",
          description:
            "End-to-end process mapped to NEP 2020, UGC, and AICTE internship guidelines with zero fake entries.",
        },
      },

      // Guide Steps
      guide: {
        step1: {
          title: "Choose Company",
          description:
            "Pick from Bronze, Silver, or Gold verified organizations.",
        },
        step2: {
          title: "Skill Badge",
          description:
            "Clear quick pre-tests to unlock eligibility for internships.",
        },
        step3: {
          title: "Internship Logs",
          description:
            "Fill daily auto-tracked logs with real-time monitoring.",
        },
        step4: {
          title: "Auto Reports",
          description: "Download NEP-ready reports mapped to semester credits.",
        },
      },

      // FAQ
      faq: {
        q1: {
          question: "How does your platform stop fake internships?",
          answer:
            "Every company goes through 3-step badge verification (Bronze, Silver, Gold) with document, bank, and government validation. This ensures only legitimate organizations are listed.",
        },
        q2: {
          question: "Are these internships valid for NEP 2020 credits?",
          answer:
            "Yes. All logs, reports, and mappings are auto-aligned with NEP 2020 and AICTE internship frameworks, making them 100% credit-compliant.",
        },
        q3: {
          question: "How do rural and small colleges benefit?",
          answer:
            "Colleges without industry tie-ups can still provide verified internships to their students by leveraging our national-level verified company database.",
        },
        q4: {
          question: "What about faculty monitoring?",
          answer:
            "Faculty get live dashboards to track student logs, approve progress, and map outcomes. No more manual paperwork or fake approvals.",
        },
      },

      // Footer
      footer: {
        quickLinks: "Quick Links",
        contact: "Contact",
        followUs: "Follow Us",
        email: "Email: support@prashikshan.in",
        phone: "Phone: +91 98765 43210",
        address: "Address: Bengaluru, India",
        copyright: "© {{year}} Prashikshan. All rights reserved.",
      },

      // PWA
      pwa: {
        install: {
          title: "Install Prashikshan",
          description:
            "Install our app for a better experience with offline access and notifications.",
          installButton: "Install",
          laterButton: "Later",
          iosInstructions:
            'Tap the share button ⬆️ and then "Add to Home Screen" to install our app.',
          gotIt: "Got it",
        },
        update: {
          title: "App Update Available",
          description:
            "A new version of Prashikshan is available. Update now for the latest features and improvements.",
          updateButton: "Update Now",
          laterButton: "Later",
        },
        offline: {
          title: "You're Offline",
          description:
            "It looks like you've lost your internet connection. Don't worry, you can still access some features of Prashikshan while offline.",
          tryAgain: "Try Again",
          availableFeatures: "Available offline features:",
          cachedPages: "View cached pages",
          savedForms: "Access saved forms",
          previousContent: "Browse previous content",
        },
      },
    },
  },
  hi: {
    translation: {
      // Common
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      success: "सफलता",
      cancel: "रद्द करें",
      confirm: "पुष्टि करें",
      save: "सेव करें",
      edit: "संपादित करें",
      delete: "हटाएं",
      search: "खोजें",
      filter: "फ़िल्टर",
      next: "अगला",
      previous: "पिछला",
      close: "बंद करें",

      // App Name & Branding
      appName: "प्रशिक्षण",
      appTagline: "NEP 2020 सत्यापित प्लेटफॉर्म",
      appDescription:
        "NEP 2020 के साथ संरेखित सत्यापित इंटर्नशिप प्लेटफॉर्म - छात्रों, कॉलेजों और उद्योगों को जोड़ना।",

      // Navigation
      nav: {
        home: "होम",
        features: "सुविधाएं",
        howItWorks: "यह कैसे काम करता है",
        guide: "गाइड",
        faq: "सामान्य प्रश्न",
        login: "लॉगिन",
        register: "पंजीकरण",
        logout: "लॉगआउट",
      },

      // Landing Page
      landing: {
        heroTitle: "भारत के इंटर्नशिप संकट का समाधान",
        heroDescription:
          "NEP 2020-अनुपालित प्लेटफॉर्म जो छात्रों, कॉलेजों और सत्यापित उद्योगों को जोड़ता है - नकली इंटर्नशिप और कौशल अंतर को समाप्त करता है।",
        getStarted: "शुरू करें",
        learnMore: "और जानें",
        problemTitle: "जो समस्या हम हल कर रहे हैं",
        problemSubtitle:
          "भारतीय कॉलेजों में NEP 2020 इंटर्नशिप क्यों असफल हो रहे हैं",
        chooseRoleTitle: "अपनी भूमिका चुनें",
        chooseRoleSubtitle:
          "अपनी भूमिका और आवश्यकताओं के आधार पर प्लेटफॉर्म के साथ शुरुआत करें",
        verificationTitle: "कंपनी सत्यापन कैसे काम करता है",
        verificationSubtitle:
          "स्वचालन + ML धोखाधड़ी का पता लगाने द्वारा संचालित 3-स्तरीय बैज सिस्टम",
        featuresTitle: "प्लेटफॉर्म सुविधाएं",
        featuresSubtitle:
          "निर्बाध इंटर्नशिप प्रबंधन के लिए आपको जो कुछ भी चाहिए",
        guideTitle: "इंटर्नशिप के लिए छात्र गाइड",
        guideSubtitle:
          "सत्यापित, NEP-अनुपालित इंटर्नशिप के लिए सरल 4-चरणीय प्रक्रिया",
        faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      },

      // Roles
      roles: {
        student: "छात्र",
        faculty: "संकाय",
        industry: "उद्योग साझेदार",
      },

      // Student Section
      student: {
        title: "छात्र",
        features: [
          "सत्यापित, बैज-रेटेड कंपनियों में आवेदन करें",
          "NEP लॉगबुक और रिपोर्ट स्वतः उत्पन्न करें",
          "इंटर्नशिप से पहले कौशल बैज अर्जित करें",
        ],
        loginButton: "छात्र लॉगिन",
      },

      // Faculty Section
      faculty: {
        title: "संकाय",
        features: [
          "वास्तविक समय में छात्र प्रगति की निगरानी करें",
          "सेमेस्टर 5 NEP क्रेडिट तुरंत मैप करें",
          "डैशबोर्ड के माध्यम से दूर से मार्गदर्शन करें",
        ],
        loginButton: "संकाय लॉगिन",
      },

      // Industry Section
      industry: {
        title: "उद्योग",
        features: [
          "कांस्य/रजत/स्वर्ण सत्यापित बैज प्राप्त करें",
          "पूर्व-प्रशिक्षित, कौशल-तैयार छात्रों तक पहुंच",
          "लाइव डैशबोर्ड के साथ इंटर्न का प्रबंधन करें",
        ],
        loginButton: "उद्योग लॉगिन",
      },

      // Login Page
      login: {
        title: "प्रशिक्षण लॉगिन",
        loginAs: "लॉगिन करें",
        email: "ईमेल",
        emailPlaceholder: "you@example.com",
        password: "पासवर्ड",
        passwordPlaceholder: "••••••••",
        loginButton: "लॉगिन करें",
        noAccount: "कोई खाता नहीं है?",
        registerHere: "यहाँ पंजीकरण करें",
        disclaimer: "लॉगिन करके, आप हमारी NEP-अनुपालित डेटा नीति से सहमत हैं।",
        forgotPassword: "पासवर्ड भूल गए?",
      },

      // Register Page
      register: {
        title: "खाता बनाएं",
        firstName: "पहला नाम",
        lastName: "अंतिम नाम",
        email: "ईमेल",
        password: "पासवर्ड",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        role: "भूमिका चुनें",
        institution: "संस्थान/संगठन",
        registerButton: "खाता बनाएं",
        haveAccount: "पहले से खाता है?",
        loginHere: "यहाँ लॉगिन करें",
        terms:
          "खाता बनाकर, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं।",
      },
    },
  },
  te: {
    translation: {
      // Common
      loading: "లోడ్ అవుతోంది...",
      error: "లోపం",
      success: "విజయం",
      cancel: "రద్దు చేయండి",
      confirm: "నిర్ధారించండి",
      save: "సేవ్ చేయండি",
      edit: "సవరించండి",
      delete: "తొలగించండి",
      search: "వెతకండి",
      filter: "ఫిల్టర్",
      next: "తదుపరి",
      previous: "మునుపటి",
      close: "మూసివేయండి",

      // App Name & Branding
      appName: "ప్రశిక్షణ",
      appTagline: "NEP 2020 ధృవీకరించబడిన ప్లాట్‌ఫామ్",
      appDescription:
        "NEP 2020తో సమలేఖనం చేయబడిన ధృవీకరించబడిన ఇంటర్న్‌షిప్ ప్లాట్‌ఫామ్ — విద్యార్థులు, కళాశాలలు మరియు పరిశ్రమలను కలుపుతుంది.",

      // Navigation
      nav: {
        home: "హోమ్",
        features: "లక్షణాలు",
        howItWorks: "ఎలా పనిచేస్తుంది",
        guide: "గైడ్",
        faq: "తరచుగా అడిగే ప్రశ్నలు",
        login: "లాగిన్",
        register: "రిజిస్టర్",
        logout: "లాగ్అవుట్",
      },

      // Landing Page
      landing: {
        heroTitle: "భారతదేశపు ఇంటర్న్‌షిప్ సంక్షోభాన్ని పరిష్కరించడం",
        heroDescription:
          "NEP 2020-అనుకూల ప్లాట్‌ఫామ్ విద్యార్థులు, కళాశాలలు మరియు ధృవీకరించబడిన పరిశ్రమలను కలుపుతుంది - నకిలీ ఇంటర్న్‌షిప్‌లు మరియు నైపుణ్య అంతరాలను తొలగిస్తుంది.",
        getStarted: "ప్రారంభించండి",
        learnMore: "మరింత తెలుసుకోండి",
        problemTitle: "మేము పరిష్కరిస్తున్న సమస్య",
        problemSubtitle:
          "భారతీయ కళాశాలలలో NEP 2020 ఇంటర్న్‌షిప్‌లు ఎందుకు విఫలమవుతున్నాయి",
        chooseRoleTitle: "మీ పాత్రను ఎంచుకోండి",
        chooseRoleSubtitle:
          "మీ పాత్ర మరియు అవసరాల ఆధారంగా ప్లాట్‌ఫామ్‌తో ప్రారంభించండి",
        verificationTitle: "కంపెనీ ధృవీకరణ ఎలా పనిచేస్తుంది",
        verificationSubtitle:
          "ఆటోమేషన్ + ML మోసం గుర్తింపు ద్వారా నడిచే 3-అంచెల బ్యాడ్జ్ సిస్టమ్",
        featuresTitle: "ప్లాట్‌ఫామ్ లక్షణాలు",
        featuresSubtitle:
          "అతుకులు లేని ఇంటర్న్‌షిప్ నిర్వహణ కోసం మీకు అవసరమైన ప్రతిదీ",
        guideTitle: "ఇంటర్న్‌షిప్‌ల కోసం విద్యార్థి గైడ్",
        guideSubtitle:
          "ధృవీకరించబడిన, NEP-అనుకూల ఇంటర్న్‌షిప్‌ల కోసం సరళమైన 4-దశల ప్రక్రియ",
        faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
      },

      // Roles
      roles: {
        student: "విద్యార్థి",
        faculty: "అధ్యాపకులు",
        industry: "పరిశ్రమ భాగస్వామి",
      },

      // Student Section
      student: {
        title: "విద్యార్థి",
        features: [
          "ధృవీకరించబడిన, బ్యాడ్జ్-రేటెడ్ కంపెనీలకు దరఖాస్తు చేయండి",
          "NEP లాగ్‌బుక్‌లు & రిపోర్టులను స్వయంచాలకంగా రూపొందించండి",
          "ఇంటర్న్‌షిప్‌లకు ముందు స్కిల్ బ్యాడ్జ్‌లు పొందండి",
        ],
        loginButton: "విద్యార్థి లాగిన్",
      },

      // Faculty Section
      faculty: {
        title: "అధ్యాపకులు",
        features: [
          "నిజ-సమయ విద్యార్థి పురోగతిని పర్యవేక్షించండి",
          "సెమిస్టర్ 5 NEP క్రెడిట్‌లను తక్షణమే మ్యాప్ చేయండి",
          "డ్యాష్‌బోర్డ్ ద్వారా రిమోట్‌గా మార్గదర్శకత్వం చేయండి",
        ],
        loginButton: "అధ్యాపక లాగిన్",
      },

      // Industry Section
      industry: {
        title: "పరిశ్రమ",
        features: [
          "కాంస్య/వెండి/బంగారు ధృవీకరించబడిన బ్యాడ్జ్ పొందండి",
          "ముందుగా-శిక్షణ పొందిన, నైపుణ్యం-సిద్ధమైన విద్యార్థులను యాక్సెస్ చేయండి",
          "లైవ్ డ్యాష్‌బోర్డ్‌లతో ఇంటర్న్‌లను నిర్వహించండి",
        ],
        loginButton: "పరిశ్రమ లాగిన్",
      },

      // Login Page
      login: {
        title: "ప్రశిక్షణ లాగిన్",
        loginAs: "లాగిన్ చేయండి",
        email: "ఇమెయిల్",
        emailPlaceholder: "you@example.com",
        password: "పాస్‌వర్డ్",
        passwordPlaceholder: "••••••••",
        loginButton: "లాగిన్ చేయండి",
        noAccount: "ఖాతా లేదా?",
        registerHere: "ఇక్కడ నమోదు చేయండి",
        disclaimer:
          "లాగిన్ చేయడం ద్వారా, మీరు మా NEP-అనుకూల డేటా విధానానికి అంగీకరిస్తున్నారు।",
        forgotPassword: "పాస్‌వర్డ్ మర్చిపోయారా?",
      },

      // Register Page
      register: {
        title: "ఖాతా సృష్టించండి",
        firstName: "మొదటి పేరు",
        lastName: "చివరి పేరు",
        email: "ఇమెయిల్",
        password: "పాస్‌వర్డ్",
        confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
        role: "పాత్రను ఎంచుకోండి",
        institution: "సంస్థ/సంస్థ",
        registerButton: "ఖాతా సృష్టించండి",
        haveAccount: "ఇప్పటికే ఖాతా ఉందా?",
        loginHere: "ఇక్కడ లాగిన్ చేయండి",
        terms:
          "ఖాతా సృష్టించడం ద్వారా, మీరు మా సేవా నిబంధనలు మరియు గోపనీయతా విధానానికి అంగీకరిస్తున్నారు।",
      },
    },
  },
  ur: {
    translation: {
      // Common
      loading: "لوڈ ہو رہا ہے...",
      error: "خرابی",
      success: "کامیابی",
      cancel: "منسوخ کریں",
      confirm: "تصدیق کریں",
      save: "محفوظ کریں",
      edit: "ترمیم کریں",
      delete: "ڈیلیٹ کریں",
      search: "تلاش کریں",
      filter: "فلٹر",
      next: "اگلا",
      previous: "پچھلا",
      close: "بند کریں",

      // App Name & Branding
      appName: "پرشکشن",
      appTagline: "NEP 2020 تصدیق شدہ پلیٹ فارم",
      appDescription:
        "NEP 2020 کے ساتھ منحصر تصدیق شدہ انٹرن شپ پلیٹ فارم — طلباء، کالجوں اور صنعتوں کو جوڑنا۔",

      // Navigation
      nav: {
        home: "ہوم",
        features: "خصوصیات",
        howItWorks: "یہ کیسے کام کرتا ہے",
        guide: "گائیڈ",
        faq: "عام سوالات",
        login: "لاگ ان",
        register: "رجسٹر",
        logout: "لاگ آؤٹ",
      },

      // Landing Page
      landing: {
        heroTitle: "ہندوستان کے انٹرن شپ بحران کا حل",
        heroDescription:
          "NEP 2020-مطابقت پذیر پلیٹ فارم جو طلباء، کالجوں اور تصدیق شدہ صنعتوں کو جوڑتا ہے - جعلی انٹرن شپس اور مہارت کے خلاء کو ختم کرتا ہے۔",
        getStarted: "شروع کریں",
        learnMore: "مزید جانیں",
        problemTitle: "جو مسئلہ ہم حل کر رہے ہیں",
        problemSubtitle:
          "ہندوستانی کالجوں میں NEP 2020 انٹرن شپس کیوں ناکام ہو رہے ہیں",
        chooseRoleTitle: "اپنا کردار منتخب کریں",
        chooseRoleSubtitle:
          "اپنے کردار اور ضروریات کی بنیاد پر پلیٹ فارم کے ساتھ شروعات کریں",
        verificationTitle: "کمپنی کی تصدیق کیسے کام کرتی ہے",
        verificationSubtitle:
          "آٹومیشن + ML فراڈ ڈیٹیکشن کے ذریعے چلنے والا 3-سطحی بیج سسٹم",
        featuresTitle: "پلیٹ فارم کی خصوصیات",
        featuresSubtitle:
          "بغیر رکاوٹ انٹرن شپ کے انتظام کے لیے آپ کو جو کچھ درکار ہے",
        guideTitle: "انٹرن شپس کے لیے طلباء کا گائیڈ",
        guideSubtitle:
          "تصدیق شدہ، NEP-مطابقت پذیر انٹرن شپس کے لیے آسان 4-مرحلہ عمل",
        faqTitle: "اکثر پوچھے جانے والے سوالات",
      },

      // Roles
      roles: {
        student: "طالب علم",
        faculty: "استاد",
        industry: "صنعتی شراکت دار",
      },

      // Student Section
      student: {
        title: "طالب علم",
        features: [
          "تصدیق شدہ، بیج-ریٹیڈ کمپنیوں میں درخواست دیں",
          "NEP لاگ بکس اور رپورٹس خودکار طور پر تیار کریں",
          "انٹرن شپس سے پہلے مہارت کے بیج حاصل کریں",
        ],
        loginButton: "طالب علم لاگ ان",
      },

      // Faculty Section
      faculty: {
        title: "استاد",
        features: [
          "حقیقی وقت میں طلباء کی پیش قدمی کی نگرانی کریں",
          "سمسٹر 5 NEP کریڈٹس فوری طور پر میپ کریں",
          "ڈیش بورڈ کے ذریعے دور سے رہنمائی کریں",
        ],
        loginButton: "استاد لاگ ان",
      },

      // Industry Section
      industry: {
        title: "صنعت",
        features: [
          "کانسی/چاندی/سونے کا تصدیق شدہ بیج حاصل کریں",
          "پہلے سے تربیت یافتہ، مہارت-تیار طلباء تک رسائی",
          "لائیو ڈیش بورڈز کے ساتھ انٹرنز کا انتظام کریں",
        ],
        loginButton: "صنعت لاگ ان",
      },

      // Login Page
      login: {
        title: "پرشکشن لاگ ان",
        loginAs: "لاگ ان کریں",
        email: "ای میل",
        emailPlaceholder: "you@example.com",
        password: "پاس ورڈ",
        passwordPlaceholder: "••••••••",
        loginButton: "لاگ ان کریں",
        noAccount: "اکاؤنٹ نہیں ہے؟",
        registerHere: "یہاں رجسٹر کریں",
        disclaimer:
          "لاگ ان کرنے سے، آپ ہماری NEP-مطابقت پذیر ڈیٹا پالیسی سے اتفاق کرتے ہیں۔",
        forgotPassword: "پاس ورڈ بھول گئے؟",
      },

      // Register Page
      register: {
        title: "اکاؤنٹ بنائیں",
        firstName: "پہلا نام",
        lastName: "آخری نام",
        email: "ای میل",
        password: "پاس ورڈ",
        confirmPassword: "پاس ورڈ کی تصدیق کریں",
        role: "کردار منتخب کریں",
        institution: "ادارہ/تنظیم",
        registerButton: "اکاؤنٹ بنائیں",
        haveAccount: "پہلے سے اکاؤنٹ ہے؟",
        loginHere: "یہاں لاگ ان کریں",
        terms:
          "اکاؤنٹ بنا کر، آپ ہماری سروس کی شرائط اور پرائیویسی پالیسی سے اتفاق کرتے ہیں۔",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      lookupLocalStorage: "prashikshan-language",
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
