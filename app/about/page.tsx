import { Metadata } from 'next';
import About from '../components/About';
import Education from '../components/Education';

export const metadata: Metadata = {
  title: 'About | Dorice George - Full-Stack Developer',
  description: 'Learn more about Dorice George, a passionate Full-Stack Developer based in Tanzania creating beautiful web applications.',
  openGraph: {
    title: 'About | Dorice George - Full-Stack Developer',
    description: 'Learn more about Dorice George, a passionate Full-Stack Developer based in Tanzania.',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Education />
    </div>
  );
}
