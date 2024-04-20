import { LinkSection, SocialLink } from "@/models/IFooterNav";

export const linkSections: LinkSection[] = [
  {
    title: "quick links",
    links: [
      { text: "about us", to: "/about" },
      { text: "teams", to: "/team" },
      { text: "services", to: "/services" },
      { text: "features", to: "/blogs" },
    ],
  },
  {
    title: "support",
    links: [
      { text: "terms & conditions", to: "/" },
      { text: "privacy policy", to: "/" },
      { text: "FAQ", to: "/" },
      { text: "support center", to: "/" },
    ],
  },
  {
    title: "company",
    links: [
      { text: "careers", to: "/" },
      { text: "updates", to: "/" },
      { text: "jobs", to: "/team" },
      { text: "announce", to: "/blogs" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { url: "www.facabook.com", icon: "bi-facebook" },
  { url: "www.instagram.com", icon: "bi-instagram" },
  { url: "www.linkedin.com", icon: "bi-linkedin" },
  { url: "www.youtube.com", icon: "bi-youtube" },
  { url: "www.twitter.com", icon: "bi-twitter-x" },
];
