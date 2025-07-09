'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 🚩 Edit links here once and they update everywhere
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    /* Sticky, blurred bar */
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-200/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ---------- Full-width logo ---------- */}
          <Link href="/" className="flex items-center">
            <Image
              src="/qodemorph.png"        // ⬅️ lives in /public
              alt="QodeT logo"
              width={140}             // match your actual logo size
              height={40}
              priority                // eager-load for better LCP
              className="h-15 w-auto"  // keep height consistent
            />
          </Link>

          {/* ---------- Desktop nav ---------- */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-colors duration-300 ${
                  pathname === href ||
                  (href === '/services' && pathname.startsWith('/services'))
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ---------- Mobile menu button ---------- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden text-gray-900 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ---------- Mobile nav links ---------- */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? 'block' : 'hidden'
        } bg-gray-200 border-t border-gray-300`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-3 text-center text-gray-900 hover:bg-gray-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}