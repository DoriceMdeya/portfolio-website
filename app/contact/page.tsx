import { Metadata } from 'next';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Dorice George - Full-Stack Developer',
  description: 'Get in touch with Dorice George for web development projects, collaborations, or just a friendly chat.',
  openGraph: {
    title: 'Contact | Dorice George - Full-Stack Developer',
    description: 'Get in touch with Dorice George for web development projects.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
