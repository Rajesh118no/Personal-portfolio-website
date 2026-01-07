export interface Service {
  id: string;
  title: string;
  iconName: 'Video' | 'PenTool' | 'TrendingUp' | 'Bot' | 'Smartphone';
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}