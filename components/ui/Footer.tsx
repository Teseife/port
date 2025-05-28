// components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background text-foreground py-6" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex space-x-4">
              <a href="https://github.com/Teseife" target="_blank" rel="noopener noreferrer">
                <Image src="./icons/github.svg" alt="GitHub" width={20} height={20} />
              </a>
              <a href="https://linkedin.com/in/teseife" target="_blank" rel="noopener noreferrer">
                <Image src="./icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" asChild size="sm">
                <a href="mailto:teseife0@gmail.com">Contact Me</a>
              </Button>
              <Button variant="outline" asChild size="sm">
                <a href="./PDFs/Thomas_resume_Project.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Center */}
          <div className="text-center mx-4">
            <p className="text-xs text-muted-foreground">
              Website designed and assembled by me — available for freelance/custom webpage work.
            </p>
          </div>

          {/* Right */}
          <div className="text-right text-xs">
            <p className="text-orange-400">Updated: 05/2025</p>
            <p>© Thomas Seife, 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
