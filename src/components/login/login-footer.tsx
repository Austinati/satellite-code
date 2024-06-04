const footerLinks = [
  ['About', 'https://satellite.water.blog/about'],
  ['Help Center', 'https://satellite.water.blog/help'],
  ['Privacy Policy', 'https://satellite.water.blog/privacy-policy'],
  ['Cookie Policy', 'https://satellite.water.blog/cookie-policy'],
  ['Accessibility', 'https://satellite.water.blog/accessibility'],
  [
    'Ads Info',
    'https://satellite.water.blog/business-ads'
  ],
  ['Blog', 'https://satellite.water.blog/blog'],
  ['Status', 'https://satellite.water.blog/status'],
  ['Careers', 'https://satellite.water.blog/careers'],
  ['Brand Resources', 'https://satellite.water.blog/brand-resources'],
  ['Advertising', 'https://satellite.water.blog/advertising'],
  ['Marketing', 'https://satellite.water.blog/marketing'],
  ['Satellite for Business', 'https://satellite.water.blog/satellite-for-business'],
  ['Developers', 'https://satellite.water.blog/developer'],
  ['Directory', 'http://satellite.water.blog/directory'],
  ['Settings', 'http://satellite.water.blog/settings']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={linkName}
          >
            {linkName}
          </a>
        ))}
        <p>© 2024 Satellite...</p>
      </nav>
    </footer>
  );
}
