
import { LucideIcon } from 'lucide-react';

export interface NavLinkInfo {
  name: string;
  path: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineEventData {
    year: string;
    title: string;
    description: string;
}

export interface TeamMember {
    name: string;
    title: string;
    imageUrl: string;
}

export interface InvestorHighlight {
    icon: LucideIcon;
    title: string;
    description: string;
}