'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Systems',
    institution: 'University of Dodoma',
    college: 'College of Informatics and Virtual Education',
    location: 'Dodoma, Tanzania',
    period: '2022 - 2025',
    status: 'Completed',
    description: 'Comprehensive study of information systems, software development, database management, and IT infrastructure. Gained hands-on experience in web development, system analysis, and project management.',
    achievements: [
      'Specialized in Web Development & Software Engineering',
      'Completed multiple full-stack projects',
      'Strong foundation in Database Management Systems',
      'Proficient in System Analysis and Design',
    ],
    logo: '/images/profile.png',
  },
];

export default function Education() {
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
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="shape-blob w-96 h-96 bg-[var(--accent)] -top-48 -left-48 opacity-10" />
      <div className="shape-blob w-80 h-80 bg-[var(--primary)] -bottom-40 -right-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
            Education
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-subtitle">
            Building a strong foundation in technology and information systems
            through quality education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative ${isVisible ? 'animate-slide-up-delay-2' : 'opacity-0'}`}
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] hidden md:block" />

              {/* Education Card */}
              <div className="md:pl-20 relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] border-4 border-[var(--background)] hidden md:block" />

                <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] p-6 lg:p-8 card-hover">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    {/* Institution Logo */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-0.5 flex-shrink-0">
                      <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--card-bg)] flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold">{edu.degree}</h3>
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-[var(--primary)] font-medium mb-1">{edu.institution}</p>
                      <p className="text-[var(--muted)] text-sm mb-2">{edu.college}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--muted)] mb-6">{edu.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Key Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-[var(--background)] border border-[var(--card-border)]"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-slide-up-delay-4' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
            <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[var(--muted)]">Continuously learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

