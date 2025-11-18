import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { FC, JSX } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  links: string[];
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, links }): JSX.Element => (
  <div
    id="mobile-menu"
    className={cn(
      'fixed left-0 top-[60px] z-40 h-[calc(100vh-60px)] w-full bg-neutral-normal p-5 backdrop-blur-md transition-transform duration-300 ease-in-out lg:hidden',
      isOpen ? 'translate-x-0' : '-translate-x-full',
    )}
  >
    <nav className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className={cn(
            'inline-flex h-12 items-center justify-center rounded-[100px] px-5 py-2 font-barlow text-sm font-medium uppercase text-neutral-accent transition hover:bg-neutral-subdued hover:text-primary-normal',
            { 'bg-neutral-subdued text-primary-normal': link === 'Home' },
          )}
        >
          {link}
        </Link>
      ))}
    </nav>
  </div>
);

export default MobileMenu;
