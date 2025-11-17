import Link from 'next/link';
import Image from 'next/image';

const FOOTER_SECTIONS = [
  {
    title: 'About Us',
    labels: [
      'Careers',
      'Company Details',
      'Terms & Conditions',
      'Help center',
      'Privacy Policy',
      'Affiliate',
    ],
  },
  {
    title: 'Products',
    labels: [
      'NFT Marketplace',
      'Slingshot',
      'Swaps',
      'NFT Launchpad',
      'Runes Platform',
      'Creator Dashboard',
    ],
  },
  {
    title: 'Resources',
    labels: ['Support', 'API', 'Feature Requests', 'Trust & Safety', 'Sitemap'],
  },
  {
    title: 'Contact Us',
    labels: ['support@tech.email', 'affiliate@tech.com'],
    extra: (
      <Image
        src="/images/install-app.png"
        alt="Install App"
        width={151.4}
        height={44}
        className="mt-6 cursor-pointer"
      />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-subdued bg-ink px-5 py-10 md:px-0">
      <div className="container mx-auto w-full lg:w-[1128px]">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-[18px] font-black uppercase italic leading-7 text-paper">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.labels.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="font-barlow text-xs font-normal text-neutral-accent transition-colors hover:text-paper md:text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              {section.extra && <div>{section.extra}</div>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
