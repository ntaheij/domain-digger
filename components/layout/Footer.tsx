'use client';

import { FaGithub, FaHeart } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const Footer = () => (
  <footer className="w-full p-4 md:px-8">
    <div className="flex items-center justify-between border-t pt-4">
      <p className="text-sm">
        Hosted with{' '}
        <FaHeart className="inline text-red-500" fontSize="1.25rem" />
        <span className="sr-only">love</span> by{' '}
        <a
          className="underline decoration-dotted underline-offset-4"
          href="https://ntaheij.dev"
          target="_blank"
          rel="noopener"
        >
          Noah Taheij
        </a>
      </p>

      <Button variant="ghost" asChild>
        <a
          href="https://github.com/ntaheij/domain-digger"
          target="_blank"
          rel="noopener"
        >
          <FaGithub className="h-6 w-6" />
          <span className="sr-only">GitHub Repository</span>
        </a>
      </Button>
    </div>
  </footer>
);

export default Footer;
