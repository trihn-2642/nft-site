'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';
import { IconClose, IconMenu } from '../Icon';
import { useIsMobile } from '@/hooks/useIsMobile';

const HEADER_LINKS = ['Home', 'Items1', 'Items2', 'Items3', 'Items4'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink backdrop-blur-md">
      <div className="mx-auto flex h-[60px] items-center justify-between px-5 py-3 md:h-[80px] md:px-10 md:py-5">
        <div className="flex gap-4 md:gap-6">
          <button
            className="text-paper transition md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <IconClose /> : <IconMenu />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={isMobile ? 72 : 71}
              height={isMobile ? 36 : 39}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex">
            {HEADER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className={cn(
                  'flex h-10 items-center justify-center rounded-[100px] px-[18px] py-2 font-[family-name:var(--font-roboto)] text-sm font-medium uppercase text-neutral-accent transition hover:bg-neutral-subdued hover:text-primary-normal',
                  {
                    'bg-neutral-subdued text-primary-normal': link === 'Home',
                  },
                )}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="h-9 w-[98px] rounded-[100px] bg-primary-normal text-center text-base font-black italic text-neutral-invert-accent md:h-10 md:w-[114px]">
            SIGNUP
          </button>
          <button className="h-9 w-[90px] rounded-[100px] border border-primary-normal text-center text-base font-black italic text-neutral-accent md:h-10 md:w-[106px]">
            LOG IN
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} links={HEADER_LINKS} />
    </header>
  );
};

export default Header;
