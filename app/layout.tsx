import type { Metadata } from 'next'; 
import { Inter } from 'next/font/google'; 
import './globals.css'; 
import Link from 'next/link'; 
const inter = Inter({ subsets: ['latin'] }); 
export const metadata: Metadata = { 
title: 'Dorice George - Web Developer', 
description: 'Professional portfolio of Dorice George', 
}; 
export default function RootLayout({ 
children, 
}: { 
children: React.ReactNode; 
}) { 
return ( 
<html lang="en"> 
      <body className={inter.className}> 
        {/* Navigation Header */} 
        <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 
shadow-sm"> 
          <div className="container mx-auto px-4 py-4 flex justify-between items-center"> 
             
            <nav className="flex space-x-6"> 
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition"> 
                Home 
              </Link> 
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition"> 
                About 
              </Link> 
              <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition"> 
                Skills 
              </Link> 
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 
transition"> 
                Projects 
              </Link> 
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition"> 
                Contact 
              </Link> 
              <Link href="/login" className="text-gray-600 hover:text-blue-600 transition"> 
                Login 
              </Link> 
            </nav> 
          </div> 
        </header> 
 
        {/* Main Content with padding for fixed header */} 
        <main className="pt-20 min-h-screen bg-white"> 
          {children} 
        </main> 
 
        {/* Simple Footer */} 
        <footer className="bg-gray-800 text-white py-8"> 
          <div className="container mx-auto px-4 text-center"> 
            <p>&copy; 2024 Dorice George. All rights reserved.</p> 
          </div> 
        </footer> 
      </body> 
    </html> 
  ); 
} 