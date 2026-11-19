import React, { useRef } from 'react';
import { Header } from '@/src/components/Header';
import { HeroSection } from '@/src/components/HeroSection';
import { PortfolioSection } from '@/src/components/PortfolioSection';
import { AboutProcessSection } from '@/src/components/AboutProcessSection';
import { ContactSection } from '@/src/components/ContactSection';
import { Footer } from '@/src/components/Footer';
import { WhatsAppFloatingButton } from '@/src/components/WhatsAppFloatingButton';

export default function App() {
  const contactNameRef = useRef<HTMLInputElement | null>(null);

  const handleContactNavigation = () => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    window.setTimeout(() => {
      contactNameRef.current?.focus({ preventScroll: true });
    }, 450);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header onContactClick={handleContactNavigation} />

      <main className="flex-1">
        <HeroSection onContactClick={handleContactNavigation} />
        <PortfolioSection onContactClick={handleContactNavigation} />
        <AboutProcessSection onContactClick={handleContactNavigation} />
        <ContactSection nameInputRef={contactNameRef} />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
