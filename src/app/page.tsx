"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UshaLogo } from "@/components/UshaLogo";
import { ContactModal } from "@/components/contact-modal";
import { KnowMoreModal } from "@/components/know-more-modal";
import { useState } from "react";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isKnowMoreModalOpen, setKnowMoreModalOpen] = useState(false);

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1200x800.png"
            alt="Background of kitchen appliances"
            fill={true}
            objectFit="cover"
            className="brightness-50"
            data-ai-hint="kitchen appliances dark"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8"
          >
            <div className="animated-gradient-border p-4 px-8">
              <UshaLogo />
            </div>
          </a>

          <p className="max-w-md text-lg text-gray-300 mb-8 font-sans">
            Your one-stop destination for quality household goods, from traditional
            vessels to modern appliances.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="px-10 py-6 text-lg font-sans"
              onClick={() => setKnowMoreModalOpen(true)}
            >
              Know More
            </Button>
            <Button
              variant="default"
              size="lg"
              className="px-10 py-6 text-lg font-sans"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      <KnowMoreModal
        isOpen={isKnowMoreModalOpen}
        onOpenChange={setKnowMoreModalOpen}
      />
    </>
  );
}
