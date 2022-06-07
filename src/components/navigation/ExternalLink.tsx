import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className,
  ariaLabel,
}) => (
  <a
    className={
      className ||
      'font-medium text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 motion-safe:transition-colors'
    }
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
