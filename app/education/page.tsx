import { Metadata } from 'next';
import Education from '../components/Education';

export const metadata: Metadata = {
  title: 'Education | Dorice George - Full-Stack Developer',
  description: 'Academic journey of Dorice George - BSc in Information Systems from University of Dodoma, College of Informatics and Virtual Education.',
  openGraph: {
    title: 'Education | Dorice George - Full-Stack Developer',
    description: 'Academic journey of Dorice George - BSc in Information Systems from University of Dodoma.',
  },
};

export default function EducationPage() {
  return (
    <div className="pt-20">
      <Education />
    </div>
  );
}

