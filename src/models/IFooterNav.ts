export interface LinkItem {
  text: string;
  to: string;
}

export interface LinkSection {
  title: string;
  links: LinkItem[];
}

export interface SocialLink {
  url: string;
  icon: string;
}
