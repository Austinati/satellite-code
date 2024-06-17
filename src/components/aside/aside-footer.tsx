const footerLinks = [
  ['Terms of Service', 'https://satellite.water.blog/terms-of-service'],
  ['Privacy Policy', 'https://satellite.water.blog/privacy-policy'],
  ['Cookie Policy', 'https://satellite.water.blog/cookie-policy'],
  ['Accessibility', 'https://satellite.water.blog/accessibility'],
  [
    'Ads Info',
    'https://satellite.water.blog/business-ads'
  ]
] as const;

export function AsideFooter(): JSX.Element {
  return (
    <footer
      className='sticky top-16 flex flex-col gap-3 text-center text-sm 
                 text-light-secondary dark:text-dark-secondary'
    >
      <nav className='flex flex-wrap justify-center gap-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={href}
          >
            {linkName}
          </a>
        ))}
      </nav>
      <p>© 2024 </p>
    </footer>
  );
}
