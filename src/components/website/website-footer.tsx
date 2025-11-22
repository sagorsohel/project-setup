"use client";

import { Link } from "react-router";
import { Github, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function WebsiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center">
                <span className="text-background text-lg font-bold">B</span>
              </div>
              <span className="text-lg font-bold">Project Setup</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An open-source bus management system for managing routes, schedules, and passengers - built with modern web technologies.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                to="/works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Works
              </Link>
              <Link
                to="/career"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Career
              </Link>
            </nav>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Help</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/support"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Customer Support
              </Link>
              <Link
                to="/delivery"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Delivery Details
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Subscribe to newsletter</h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email..."
                className="flex-1"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-xs text-muted-foreground">Featured on:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://bestofjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  bestofjs
                </a>
                <a
                  href="https://producthunt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Product Hunt
                </a>
                <a
                  href="https://reddit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  reddit
                </a>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Medium
                </a>
                <a
                  href="https://ycombinator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Y Combinator
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t py-6">
          <p className="text-center text-sm text-muted-foreground">
            ©{currentYear} Project Setup, Made with ❤️ for better web.
          </p>
        </div>
      </div>
    </footer>
  );
}
