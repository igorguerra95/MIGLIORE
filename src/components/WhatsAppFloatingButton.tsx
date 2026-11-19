import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '@/src/data/migliore';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={STUDIO_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Entrar em contato pelo WhatsApp ${STUDIO_INFO.phoneDisplay}`}
      title={`WhatsApp ${STUDIO_INFO.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-architectural-hover transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp/35 animate-ping [animation-duration:2.8s]"
      />
      <MessageCircle className="relative h-6 w-6" strokeWidth={1.75} />
    </a>
  );
}
