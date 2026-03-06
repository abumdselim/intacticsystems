export interface LocalizedText {
  en: string;
  bn: string;
}

export interface Service {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon?: string;
  featured?: boolean;
}

export interface NavItem {
  id: string;
  label: LocalizedText;
  href: string;
}

export interface SiteConfig {
  siteName: LocalizedText;
  siteDescription: LocalizedText;
  email: string;
  navItems: NavItem[];
  services: Service[];
}

const siteConfig: SiteConfig = {
  siteName: {
    en: "Intactic Systems",
    bn: "ইন্ট্যাক্টিক সিস্টেমস",
  },
  siteDescription: {
    en: "Innovative Solutions for Your Business Growth",
    bn: "আপনার ব্যবসায়িক বৃদ্ধির জন্য উদ্ভাবনী সমাধান",
  },
  email: "ask@intacticsys.com",
  navItems: [
    {
      id: "home",
      label: { en: "Home", bn: "হোম" },
      href: "/",
    },
    {
      id: "services",
      label: { en: "Services", bn: "সেবাসমূহ" },
      href: "/services",
    },
    {
      id: "shop",
      label: { en: "Shop", bn: "শপ" },
      href: "/shop",
    },
    {
      id: "contact",
      label: { en: "Contact", bn: "যোগাযোগ" },
      href: "/contact",
    },
  ],
  services: [
    {
      id: "custom-software",
      title: {
        en: "Custom Software",
        bn: "কাস্টম সফটওয়্যার",
      },
      description: {
        en: "Tailored software solutions designed specifically for SMEs to streamline operations and boost productivity",
        bn: "ছোট এবং মাঝারি উদ্যোগের জন্য বিশেষভাবে ডিজাইন করা কাস্টম সফটওয়্যার সমাধান",
      },
      featured: true,
    },
    {
      id: "web-design",
      title: {
        en: "Web Design",
        bn: "ওয়েব ডিজাইন",
      },
      description: {
        en: "Professional web design services by local experts, crafted to represent your brand uniquely",
        bn: "স্থানীয় পেশাদারদের দ্বারা প্রদত্ত পেশাদার ওয়েব ডিজাইন সেবা যা আপনার ব্র্যান্ডকে অনন্যভাবে প্রতিফলিত করে",
      },
      featured: true,
    },
    {
      id: "brand-aesthetics",
      title: {
        en: "Brand Aesthetics",
        bn: "ব্র্যান্ড নান্দনিকতা",
      },
      description: {
        en: "360-degree branding strategy encompassing visual identity, messaging, and customer experience",
        bn: "সম্পূর্ণ ৩৬০ ডিগ্রি ব্র্যান্ডিং কৌশল যা ভিজ্যুয়াল পরিচয়, বার্তা এবং গ্রাহক অভিজ্ঞতা অন্তর্ভুক্ত করে",
      },
    },
    {
      id: "bulk-sms",
      title: {
        en: "Bulk SMS",
        bn: "বাল্ক এসএমএস",
      },
      description: {
        en: "Reliable and cost-effective bulk SMS services for marketing campaigns and customer communications",
        bn: "মার্কেটিং ক্যাম্পেইন এবং গ্রাহক যোগাযোগের জন্য নির্ভরযোগ্য এবং সাশ্রয়ী বাল্ক এসএমএস পরিষেবা",
      },
    },
    {
      id: "premium-shop",
      title: {
        en: "Premium Shop",
        bn: "প্রিমিয়াম শপ",
      },
      description: {
        en: "Premium e-commerce solutions with advanced features for managing and growing your online business",
        bn: "আপনার অনলাইন ব্যবসা পরিচালনা এবং বৃদ্ধির জন্য উন্নত বৈশিষ্ট্য সহ প্রিমিয়াম ই-কমার্স সমাধান",
      },
    },
  ],
};

export default siteConfig;
