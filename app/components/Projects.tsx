'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with shopping cart, payment integration, user authentication, and admin dashboard for managing products and orders.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/images/e commerce.jfif',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects with real-time collaboration, drag-and-drop functionality, and progress tracking.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    image: '/images/task mamangerment app.jfif',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing various web projects with smooth animations, dark mode support, and contact form integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: '/images/potfolio logo.jpeg',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: true,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and severe weather alerts using real-time API data.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    image: '/images/whether dashboard website.jfif',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: false,
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, comment system, social sharing, and SEO optimization built for content creators.',
    tech: ['Next.js', 'MDX', 'PostgreSQL', 'Prisma'],
    image: '/images/blog palform.jfif',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time messaging application with private and group chats, file sharing, typing indicators, and read receipts.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    image: '/images/chat application.jfif',
    liveUrl: '#',
    githubUrl: 'https://github.com/DoriceMdeya',
    featured: false,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
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

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="shape-blob w-96 h-96 bg-[var(--secondary)] top-0 -right-48 opacity-10" />
      <div className="shape-blob w-80 h-80 bg-[var(--primary)] bottom-0 -left-40 opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">
            My Projects
          </span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for development. 
            Each project is a unique piece of work.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center gap-4 mb-12 ${isVisible ? 'animate-slide-up-delay-1' : 'opacity-0'}`}>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                : 'bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--primary)]'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white'
                : 'bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--primary)]'
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)] card-hover ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="project-image h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label="View live demo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label="View source code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--background)] text-[var(--muted)] border border-[var(--card-border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-slide-up-delay-4' : 'opacity-0'}`}>
          <a
            href="https://github.com/DoriceMdeya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>See More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
