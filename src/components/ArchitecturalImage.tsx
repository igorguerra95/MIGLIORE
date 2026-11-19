import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fallbackTitle?: string;
}

export function ArchitecturalImage({
  src,
  alt,
  className = '',
  priority = false,
  fallbackTitle,
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full flex-col items-center justify-center bg-surface border border-border p-8 text-center ${className}`}
      >
        <Compass className="h-8 w-8 text-primary/60 mb-3" strokeWidth={1.25} />
        <span className="font-serif text-lg font-medium text-foreground">
          {fallbackTitle || 'MIGLIORE — Ambientes Planejados'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
