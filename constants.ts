import { Service, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS = [
  "Script Writing",
  "Short-Form Content",
  "Storytelling",
  "Social Media Strategy",
  "AI-Assisted Creation"
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Short-Form Video Scripts',
    iconName: 'Video',
    description: 'Hook-driven scripts designed to stop the scroll and retain viewers.'
  },
  {
    id: '2',
    title: 'Storytelling & Narratives',
    iconName: 'PenTool',
    description: 'Compelling narratives that build emotional connection with your audience.'
  },
  {
    id: '3',
    title: 'Content Strategy & Growth',
    iconName: 'TrendingUp',
    description: 'Data-backed roadmaps to grow your following and engagement.'
  },
  {
    id: '4',
    title: 'AI-Powered Content Creation',
    iconName: 'Bot',
    description: 'Leveraging AI tools to scale production without losing authenticity.'
  },
  {
    id: '5',
    title: 'IG & YT Shorts Planning',
    iconName: 'Smartphone',
    description: 'Platform-specific optimization for maximum reach on Reels and Shorts.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Amazing storytelling skills. Our engagement doubled within the first two weeks of working together.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    avatarUrl: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: '2',
    text: "Very professional and creative content ideas. It's rare to find someone who understands the algorithm and art.",
    author: "Mike Ross",
    role: "YouTuber (500k subs)",
    avatarUrl: "https://i.pravatar.cc/150?u=mike"
  },
  {
    id: '3',
    text: "Understands emotion and audience psychology perfectly. The scripts were spot on.",
    author: "Elena Fisher",
    role: "Brand Founder",
    avatarUrl: "https://i.pravatar.cc/150?u=elena"
  }
];

export const TOOLS = [
  "Instagram", "YouTube", "ChatGPT", "Google AI Studio", "CapCut", "VN Editor", "Notion", "Premiere Pro"
];