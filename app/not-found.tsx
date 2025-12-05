'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg-light dark:gradient-bg -z-10" />
      
      {/* Decorative Shapes */}
      <div className="shape-blob w-96 h-96 bg-[var(--primary)] top-20 -left-48 opacity-20" />
      <div className="shape-blob w-80 h-80 bg-[var(--secondary)] bottom-20 -right-40 opacity-20" />

      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mx-auto text-center ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[150px] sm:text-[200px] font-bold gradient-text leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center animate-float">
                <svg className="w-16 h-16 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-[var(--muted)] text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center space-x-2">
              <span>Contact Support</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-[var(--card-border)]">
            <p className="text-sm text-[var(--muted)] mb-4">Or try these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/skills', label: 'Skills' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

