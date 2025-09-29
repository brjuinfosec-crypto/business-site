import { ShieldCheck, BrainCircuit, Code, Smartphone, Cloud, Bot, Blocks, Zap, Users, Shield, Rocket, Lightbulb, Scale } from 'lucide-react';
import type { NavLinkInfo, Service, TimelineEventData, TeamMember, InvestorHighlight } from './types';

export const NAV_LINKS: NavLinkInfo[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Company', path: '/company' },
  { name: 'AI Platform', path: '/ai-platform' },
  { name: 'Investor', path: '/investor' },
];

export const SERVICES_LIST: Service[] = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'State-of-the-art security solutions to protect your digital assets against evolving threats.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Eco System',
    description: 'Developing intelligent systems and AI-driven platforms to automate and optimize business processes.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Crafting bespoke, high-performance websites and web applications with modern technologies.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'We build custom AI agents tailored to your business needs and design automation workflows that streamline processes, and boost efficiency.',
  },
  {
    icon: Smartphone,
    title: 'Android/IOS Apps',
    description: 'Building intuitive and powerful mobile applications for both Android and iOS platforms.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Leveraging cloud infrastructure for scalable, reliable, and cost-effective business operations.',
  },
  {
    icon: Blocks,
    title: 'SAP Solution',
    description: 'Implementing and managing SAP systems to streamline enterprise resource planning.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description: 'Seamlessly integrating artificial intelligence into your existing systems to unlock new capabilities.',
  },
];

export const COMPANY_TIMELINE: TimelineEventData[] = [
    {
        year: 'Q1 24',
        title: 'Company Founded',
        description: 'BRJU Infosec Inc. was founded in early 2024 with a mission to merge AI and Cybersecurity.'
    },
    {
        year: 'Q2 24',
        title: 'Seed Funding Secured',
        description: 'Successfully closed our initial seed funding round, enabling us to accelerate R&D.'
    },
    {
        year: 'Q3 24',
        title: 'IntelligentLLM Alpha',
        description: 'Launched the alpha version of our flagship AI platform, IntelligentLLM, to select partners.'
    },
    {
        year: 'Q4 24',
        title: 'First Enterprise Client',
        description: 'Onboarded our first major enterprise client, validating our market strategy and solutions.'
    }
];

export const LEADERSHIP_TEAM: TeamMember[] = [
    {
        name: 'Alex Johnson',
        title: 'Founder & CEO',
        imageUrl: 'https://placehold.co/400x400/00ffff/000000?text=AJ'
    },
    {
        name: 'Samantha Rao',
        title: 'Chief Technology Officer',
        imageUrl: 'https://placehold.co/400x400/00ffff/000000?text=SR'
    },
    {
        name: 'Ben Carter',
        title: 'Chief Information Security Officer',
        imageUrl: 'https://placehold.co/400x400/00ffff/000000?text=BC'
    }
];

export const INVESTOR_HIGHLIGHTS: InvestorHighlight[] = [
    {
        icon: Rocket,
        title: 'Massive Market Opportunity',
        description: 'Positioned at the intersection of AI and Cybersecurity, two of the fastest-growing tech sectors.'
    },
    {
        icon: Lightbulb,
        title: 'Proprietary Technology',
        description: 'Our IntelligentLLM platform and ongoing neural network research create a strong competitive moat.'
    },
    {
        icon: Users,
        title: 'Experienced Leadership',
        description: 'Led by a team of industry veterans with a proven track record of innovation and execution.'
    },
    {
        icon: Scale,
        title: 'Scalable Business Model',
        description: 'A flexible, service-oriented architecture designed for rapid scaling and enterprise adoption.'
    }
];