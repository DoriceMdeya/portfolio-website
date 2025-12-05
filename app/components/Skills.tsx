'use client';

import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Prisma'],
  },
  {
    title: 'Database',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    title: 'Tools & Others',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500',
    skills: ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code', 'Linux'],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
            My Skills
          </span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-subtitle">
            I'm constantly learning and expanding my skill set. Here are the technologies 
            and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'stagger-children' : ''}`}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-[var(--background)] rounded-2xl p-6 lg:p-8 border border-[var(--card-border)] card-hover ${
                isVisible ? '' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up-delay-4' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[var(--background)] border border-[var(--card-border)]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[var(--muted)]">Always learning new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
