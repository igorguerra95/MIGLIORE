import React from 'react';
import { STUDIO_INFO } from '@/src/data/migliore';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <a
              href="#inicio"
              className="font-serif text-2xl font-semibold tracking-[0.06em] text-primary-deep"
            >
              {STUDIO_INFO.brandName}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              MIGLIORE - Ambientes Planejados · Arquitetura de Interiores &amp; Marcenaria Autoral
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors whitespace-nowrap">
              Início
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors whitespace-nowrap">
              Portfólio
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors whitespace-nowrap">
              Sobre
            </a>
            <a href="#contato" className="hover:text-primary transition-colors whitespace-nowrap">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span>{STUDIO_INFO.address}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{STUDIO_INFO.phoneDisplay}</span>
            <span aria-hidden="true">·</span>
            <span>Horário: {STUDIO_INFO.hours}</span>
          </div>

          <p className="tabular-nums">
            © {currentYear} MIGLIORE - Ambientes Planejados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
