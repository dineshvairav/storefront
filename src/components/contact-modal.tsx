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
  const address = "Usha Metals & Appliances, Fancy Bazaar, Changanacherry 686101.";
  const phone = "+91 99612 95835";
  const email = "ushaagency1960@gmail.com";

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-lg max-w-2xl mx-auto">
        <SheetHeader className="text-center mb-6">
          <SheetTitle className="text-2xl font-bold">Contact Us</SheetTitle>
          <SheetDescription>
            Get in touch with us through any of the channels below.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-white/5 hover:-translate-y-1"
          >
            <MapPin className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Our Address</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors break-words">
              {address}
            </p>
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-white/5 hover:-translate-y-1"
          >
            <Phone className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Phone Number</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              {phone}
            </p>
          </a>
          <a
            href={`mailto:${email}`}
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg transition-all hover:bg-white/5 hover:-translate-y-1"
          >
            <Mail className="h-8 w-8 mb-2 text-primary" />
            <h3 className="font-semibold text-lg">Email Address</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors break-words">
              {email}
            </p>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
