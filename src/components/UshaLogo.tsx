import Image from 'next/image';
import React from 'react';

export function UshaLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Usha Logo"
      width={240}
      height={103}
      priority
    />
  );
}
