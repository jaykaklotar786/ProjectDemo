// components/header.tsx
'use client'; // Mobile menu ke liye client component chahiye

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex h-16 items-center justify-between ">
        {/* Left side - Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <Image
            className="rounded-full p-3.5 ml-5 "
            src="/images/site-logo-white.svg"
            alt="Charity Logo"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About us
          </Link>
          <Link
            href="/causes"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Stories
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            contact
          </Link>
        </nav>

        <div className="hidden md:block pt-3">
          <Button
            variant={'secondary'}
            className="px-8 py-6 h-1 rounded-xl border-[#1f2b0a] text-[#1f2b0a] hover:bg-[#8bce17] hover:text-white"
          >
            Donate Now
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/causes"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button variant={'secondary'} className="">
              Donate Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
