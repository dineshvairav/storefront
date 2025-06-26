"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Mail, Phone, MapPin } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
  const address = "123 Usha Street, Chennai, Tamil Nadu 600001, India";
  const phone = "+91 98765 43210";
  const email = "contact@usha.app";

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-lg max-w-2xl mx-auto">
        <SheetHeader className="text-center mb-6">
          <SheetTitle className="text-2xl font-bold">Contact Us</SheetTitle>
          <SheetDescription>
            Get in touch with us through any of the channels below.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center p-4">
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Our Address</h3>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {address}
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Phone className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Phone Number</h3>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {phone}
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Mail className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Email Address</h3>
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
