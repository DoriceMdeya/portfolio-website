import { Metadata } from 'next';
import Projects from '../components/Projects';

export const metadata: Metadata = {
  title: 'Projects | Dorice George - Full-Stack Developer',
  description: 'Browse the portfolio of projects by Dorice George - E-commerce platforms, task management apps, and more.',
  openGraph: {
    title: 'Projects | Dorice George - Full-Stack Developer',
    description: 'Browse the portfolio of projects by Dorice George.',
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
