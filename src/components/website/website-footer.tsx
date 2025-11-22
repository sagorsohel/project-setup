"use client";

import { Link } from "react-router";

export function WebsiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-40 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between md:py-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {currentYear} Bus Admin. All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-4 text-xs md:text-sm">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/admin/dashboard"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/login"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Admin Login
              </Link>
              <Link
                to="/user/login"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                User Login
              </Link>
            </nav>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground">
            <p>
              Built with{" "}
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
              >
                shadcn/ui
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

