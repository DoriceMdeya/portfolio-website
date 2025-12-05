import { Metadata } from 'next';
import Skills from '../components/Skills';

export const metadata: Metadata = {
  title: 'Skills | Dorice George - Full-Stack Developer',
  description: 'Explore the technologies and tools Dorice George works with - React, Next.js, TypeScript, Node.js, and more.',
  openGraph: {
    title: 'Skills | Dorice George - Full-Stack Developer',
    description: 'Explore the technologies and tools Dorice George works with.',
  },
};

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <Skills />
    </div>
  );
}
