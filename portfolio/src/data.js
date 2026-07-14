// Data extracted from QA portfolio documents
export const personal = {
  name: "Dony Afrizal",
  title: "Software Quality Assurance",
  email: "dony.afrz@gmail.com",
  phone: "087800129226",
  location: "Tangerang, 15132",
  linkedin: "https://www.linkedin.com/in/donyafrizal/",
  summary: "QA Engineer with 2+ years of experience in web and mobile application testing. Skilled in test case development, regression testing, bug tracking, and cross-functional collaboration."
}

export const experiences = [
  {
    role: "Quality Engineer",
    company: "Kompas.id",
    period: "03/2024 - Present",
    points: [
      "Led quality assurance activities across multiple digital products, ensuring reliable and seamless user experiences for web and mobile platforms.",
      "Actively validated critical business domains including Membership, Subscription, Checkout, Payment, Order Management, and backend services.",
      "Performed end-to-end testing across customer-facing applications and internal administration systems, including DBA Panel and operational back-office platforms.",
      "Conducted comprehensive validation of third-party payment integrations.",
      "Collaborated closely with Product Managers, Engineers, and Business Stakeholders to define quality standards and release readiness.",
      "Played a key role in the migration initiative from Nuxt 2 to Nuxt 3, ensuring feature parity across Kompas.id, Article Pages, Manage Account, Subscription, and Checkout platforms.",
      "Executed API, integration, regression, and user acceptance testing.",
      "Performed analytics and data layer validation to ensure accurate tracking and reporting."
    ],
    tech: ["Azure", "Ms. Teams", "Postman", "JIRA", "Mixpanel", "Chartbeat", "Microsoft Suite"]
  },
  {
    role: "Quality Assurance",
    company: "Campaign.com",
    period: "07/2023 - 01/2024",
    points: [
      "Defined and executed testing strategy for donation and campaign management on iOS platforms.",
      "Created comprehensive test plans, test scenarios, and defect management processes.",
      "Conducted functional, usability, and regression testing."
    ],
    tech: ["JIRA", "Slack", "Google Workspace", "Robot Framework"]
  },
  {
    role: "QA Automation Engineer",
    company: "Flash Coffee",
    period: "08/2022 - 02/2023",
    points: [
      "Designed and implemented automation frameworks for web and mobile using Robot Framework.",
      "Automated critical user journeys, reducing manual regression effort.",
      "Integrated automated testing into CI/CD pipelines.",
      "Performed API testing and backend validation."
    ],
    tech: ["Python", "Robot Framework", "GitHub", "Postman", "Cypress", "Saucelabs", "Jenkins", "JIRA"]
  }
]

export const projectCategories = [
  {
    name: "CMS Repola",
    icon: "📰",
    projects: [
      "Live Streaming Embed Form in Topics",
      "Live Streaming Link Previews in Topics",
      "Post Pinning State Management Scenarios",
      "Maximum Character Limit Validation for Post Titles",
      "'Last Modified By' and Date Display Functionality",
      "Image and Video Credit and Caption Editing",
      "Tab Behavior During Published Post Deletion",
      "'Baca Selengkapnya' Component Responsiveness",
      "Defect Resolution for 'Lainnya' Widget in 'Berita Utama'"
    ]
  },
  {
    name: "Data Layer & Analytics",
    icon: "📊",
    projects: [
      "Deprecation of 'pageDetailsPushed' and 'userDetailsPushed' Events",
      "Video Playback Tracking on Homepage and 'Pemilu' Page",
      "Coachmark Interaction Events (Viewed, Closed, Finished)",
      "Rubric Click Event Tracking in Main Navigation",
      "Chartbeat Analytics Value Adjustments Across Pages",
      "'page_viewed' Tracking Implementation for 'Pilkada' and 'Pilihanku' Pages"
    ]
  },
  {
    name: "Paywall & Membership",
    icon: "🔒",
    projects: [
      "Freewall Implementation on Repola Pages",
      "Hard Paywall and Subscribe with Google (SWG) Toggle Configuration",
      "Grace Period Paywall Implementation",
      "'kompasid-paywall' Integration on 'Foto Cerita' and 'Galeri'"
    ]
  },
  {
    name: "Migration & SEO",
    icon: "🔄",
    projects: [
      "CDS v2 API Migration (Meta Terms, Article Lists, and Search)",
      "SEO JSON-LD Implementation in Repola Article Details",
      "SEO Robots Configuration for Repola Detail and Index Pages",
      "Canonical Link Implementation in Repola Detail Pages",
      "'Dofollow' Attribute Implementation for Anchor Tags"
    ]
  },
  {
    name: "Pilkada 2024",
    icon: "🗳️",
    projects: [
      "Metadata and Routing Validation",
      "'Utama', 'Terkini', and 'Analisis' Sections Validation",
      "Breadcrumb Navigation and Iframe Widget Integration",
      "Freewall and 'page_viewed' Tracker Implementation",
      "Banner Touchpoints and Call-to-Action (CTA) Enhancements"
    ]
  },
  {
    name: "Subscription & Payment",
    icon: "💳",
    projects: [
      "Support Site 'Halaman Sukses' Redesign",
      "Help Button Component Integration",
      "Flexible 'Price Coret' (Strikethrough Pricing) Scenarios",
      "Introductory Price to Auto-Renewal Transition Handling",
      "KDP and 'Koran' Checkout Page Migration to Nuxt 3",
      "Purchase Token Deletion via Subscription Service API"
    ]
  }
]

export const educations = [
  { degree: "Bachelor's degree, Information System", school: "Bina Nusantara University", period: "03/2020 - 05/2022" },
  { degree: "Associate's degree, Information and Document Management", school: "Universitas Indonesia", period: "08/2015 - 08/2018" }
]

export const organizations = [
  { role: "Staff APC (Alumni Peduli Center)", org: "ILUNI UI", period: "08/2019 - 08/2022" },
  { role: "Head of Departemen Sosial Masyarakat & Lingkungan", org: "BEM Vokasi", period: "01/2017 - 12/2017" },
  { role: "Staff of Departemen Sosial Masyarakat", org: "BEM UI", period: "01/2016 - 12/2016" }
]

export const skills = [
  "Test Case Development", "Regression Testing", "Bug Tracking", "API Testing",
  "Integration Testing", "User Acceptance Testing", "Automation Testing",
  "CI/CD", "Data Layer Validation", "Cross-functional Collaboration",
  "Postman", "JIRA", "Azure", "Robot Framework", "Python",
  "Cypress", "Mixpanel", "Chartbeat", "Git", "Jenkins"
]
