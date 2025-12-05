'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg-light dark:gradient-bg -z-10" />
        
        {/* Decorative Shapes */}
        <div className="shape-blob w-96 h-96 bg-[var(--primary)] top-20 -left-48 opacity-20" />
        <div className="shape-blob w-80 h-80 bg-[var(--secondary)] bottom-20 -right-40 opacity-20" />
        <div className="shape-blob w-64 h-64 bg-[var(--accent)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className={`mb-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-[var(--primary)] shadow-xl animate-float">
                <Image
                  src="/images/potfolio logo.jpeg"
                  alt="Dorice George"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Greeting Badge */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] mb-6 ${mounted ? 'animate-slide-up-delay-1' : 'opacity-0'}`}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[var(--muted)]">Available for work</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${mounted ? 'animate-slide-up-delay-2' : 'opacity-0'}`}>
              Hi, I'm{' '}
              <span className="gradient-text">Dorice George</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-[var(--muted)] mb-4 ${mounted ? 'animate-slide-up-delay-3' : 'opacity-0'}`}>
              Full-Stack Web Developer
            </p>

            {/* Description */}
            <p className={`text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 ${mounted ? 'animate-slide-up-delay-3' : 'opacity-0'}`}>
              I create beautiful, functional, and scalable web applications
              that deliver exceptional user experiences. Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${mounted ? 'animate-slide-up-delay-4' : 'opacity-0'}`}>
              <Link href="/projects" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div className={`${mounted ? 'animate-slide-up-delay-4' : 'opacity-0'}`}>
              <p className="text-sm text-[var(--muted)] mb-4">Technologies I work with</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-[var(--card-bg)] border-y border-[var(--card-border)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 'BSc', label: 'Information Systems' },
              { number: '2025', label: 'UDOM Graduate' },
              { number: '10+', label: 'Projects Completed' },
              { number: '6+', label: 'Technologies Mastered' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-[var(--muted)] text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of my recent works that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online store with shopping cart, payment integration, and admin dashboard.',
                tech: ['React', 'Node.js', 'MongoDB'],
                image: '/images/e commerce.jfif',
              },
              {
                title: 'Task Management App',
                description: 'A productivity app for managing daily tasks and projects with real-time collaboration.',
                tech: ['Next.js', 'Firebase', 'Tailwind'],
                image: '/images/task mamangerment app.jfif',
              },
              {
                title: 'Portfolio Website',
                description: 'A responsive portfolio website showcasing various web projects and skills.',
                tech: ['Next.js', 'TypeScript', 'Tailwind'],
                image: '/images/potfolio logo.jpeg',
              },
            ].map((project, index) => (
              <div key={index} className="project-card card-hover bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)]">
                <div className="project-image h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[var(--muted)] mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-[var(--background)] text-[var(--muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-10" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Start a Conversation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
