import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Sheet } from '@/src/components/ui/sheet';
import { STUDIO_INFO } from '@/src/data/migliore';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

export function Header({ onContactClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-background/92 backdrop-blur-md border-b border-border'
          : 'bg-background/80 backdrop-blur-xs border-b border-border-subtle'
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[1280px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-10">
        {/* Zona 1: Wordmark em linha única */}
        <a
          href="#inicio"
          className="font-serif text-2xl md:text-[28px] font-semibold tracking-[0.06em] text-primary-deep whitespace-nowrap shrink-0"
        >
          {STUDIO_INFO.brandName}
        </a>

        {/* Zona 2: Links de navegação concisos em linha única */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-normal tracking-[0.02em] text-muted-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal única + gatilho do drawer mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:block">
            <Button variant="primary" size="sm" onClick={onContactClick}>
              Entrar em contato
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileOpen}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <Sheet
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        title={STUDIO_INFO.brandName}
        description="Ambientes Planejados & Arquitetura"
      >
        <nav aria-label="Navegação móvel" className="flex flex-col divide-y divide-border-subtle">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleMobileNav(item.href)}
              className="flex min-h-[48px] w-full items-center justify-between py-3 text-left font-serif text-2xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="text-xs font-sans text-muted-foreground">→</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 border-t border-border pt-6 space-y-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
          >
            Entrar em contato
          </Button>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>{STUDIO_INFO.phoneDisplay}</p>
            <p>{STUDIO_INFO.address}</p>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
