import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import BookmarkletLink from '@/components/layout/header/BookmarkletLink';
import ThemeMenu from '@/components/layout/header/ThemeMenu';

const Header = () => (
  <header className="w-full p-4 md:px-8">
    <div className="flex items-center justify-between pb-4">
      <Link className="flex items-center gap-2" href="/">
        <LogoDark className="inline h-6 dark:hidden" />
        <LogoLight className="hidden h-6 dark:inline" />
        Domain Digger
      </Link>

      <div className="flex items-center justify-between gap-4">
        <Button variant="ghost" asChild>
          <a
            href="https://github.com/ntaheij/domain-digger"
            target="_blank"
            rel="noopener"
          >
            <FaGithub className="mr-1 h-6 w-4" />
            <span>Star</span>
            <span className="sr-only">on GitHub</span>
          </a>
        </Button>
        <BookmarkletLink />
        <ThemeMenu />
      </div>
    </div>
  </header>
);

export default Header;
