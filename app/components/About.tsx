'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
      <div className="shape-blob w-96 h-96 bg-[var(--primary)] -top-48 -right-48 opacity-10" />
      <div className="shape-blob w-80 h-80 bg-[var(--secondary)] -bottom-40 -left-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Avatar Section */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Avatar */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-1">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <Image 
                    src="/images/profile.png" 
                    alt="Dorice George" 
                    width={400} 
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-[var(--card-bg)] rounded-2xl p-4 shadow-xl border border-[var(--card-border)] animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">BSc Graduate</p>
                    <p className="text-xs text-[var(--muted)]">UDOM 2025</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[var(--card-bg)] rounded-2xl p-4 shadow-xl border border-[var(--card-border)] animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">10+ Projects</p>
                    <p className="text-xs text-[var(--muted)]">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={isVisible ? 'animate-slide-up-delay-2' : 'opacity-0'}>
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Passionate about creating{' '}
              <span className="gradient-text">digital experiences</span>
            </h2>

            <div className="space-y-4 text-[var(--muted)] mb-8">
              <p>
                Hello! I'm Dorice George, a passionate Full-Stack Web Developer and recent graduate from 
                the University of Dodoma with a Bachelor of Science in Information Systems. Based in 
                Iringa, Tanzania, I love creating responsive, user-friendly websites and applications 
                that solve real-world problems.
              </p>
              <p>
                My journey in web development started during my university studies at the College of 
                Informatics and Virtual Education, where I developed a deep passion for crafting clean, 
                efficient code and beautiful user interfaces. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>
              <p>
                With a strong academic foundation and hands-on project experience, I strive to deliver 
                high-quality solutions that exceed expectations and create meaningful impact in the 
                tech industry.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)]">Location</p>
                  <p className="font-medium">Iringa, Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)]">Specialty</p>
                  <p className="font-medium">Full-Stack Dev</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Let's Talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
