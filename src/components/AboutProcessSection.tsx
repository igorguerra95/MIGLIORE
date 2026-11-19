import React from 'react';
import { motion } from 'motion/react';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';
import { Button } from '@/src/components/ui/button';
import {
  CLIENT_ENDORSEMENT,
  CREATIVE_PROCESS,
  STUDIO_VISION_MEDIA,
} from '@/src/data/migliore';

interface AboutProcessSectionProps {
  onContactClick: () => void;
}

export function AboutProcessSection({ onContactClick }: AboutProcessSectionProps) {
  return (
    <section id="sobre" className="border-t border-border bg-surface py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Bloco 1: Visão Estética & Sobre o Estúdio */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="h-full overflow-hidden border border-border bg-surface-elevated shadow-architectural aspect-[3/4] lg:aspect-auto">
              <ArchitecturalImage
                src={STUDIO_VISION_MEDIA.image}
                alt={STUDIO_VISION_MEDIA.alt}
                fallbackTitle="Estúdio MIGLIORE"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-7 lg:py-2"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary">
                Visão Estética &amp; Disciplina
              </p>

              <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.025em] leading-[1.06] text-foreground">
                Cada milímetro planejado para atravessar décadas com serenidade.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-[1.75] text-muted-foreground max-w-[64ch]">
                <p>
                  A MIGLIORE - Ambientes Planejados nasce da convicção de que a arquitetura de
                  interiores deve ordenar o cotidiano sem ruído visual. Nosso trabalho articula
                  arquitetura espacial, marcenaria sob medida e luminotécnica com precisão de
                  desenho industrial.
                </p>
                <p>
                  Em vez de acumular elementos decorativos efêmeros, investigamos a pureza dos
                  planos contínuos, a honestidade tátil da madeira maciça, das pedras naturais e
                  dos tecidos estruturados em tons profundos de azul-marinho e branco gelo.
                </p>
              </div>
            </div>

            {/* Depoimento Atribuível Separado por Divisores Sutis (Sem border-l-4) */}
            <div className="mt-10 border-y border-border py-7">
              <blockquote className="font-serif text-xl sm:text-2xl italic leading-[1.45] text-foreground">
                “{CLIENT_ENDORSEMENT.quote}”
              </blockquote>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-bold text-foreground">{CLIENT_ENDORSEMENT.author}</span>
                <span aria-hidden="true">·</span>
                <span>{CLIENT_ENDORSEMENT.context}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Processo Criativo */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary">
                Processo Criativo
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] leading-[1.08] text-foreground">
                Método em quatro etapas do conceito à entrega técnica.
              </h3>
            </div>

            <Button variant="outline" size="md" onClick={onContactClick}>
              Entrar em contato
            </Button>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CREATIVE_PROCESS.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="flex flex-col justify-between border border-border bg-surface-elevated p-6 sm:p-7 shadow-architectural transition-all duration-300 hover:-translate-y-1 hover:shadow-architectural-hover"
              >
                <div>
                  <span className="font-serif text-3xl font-semibold text-primary tabular-nums">
                    {stage.number}.
                  </span>
                  <h4 className="mt-4 font-serif text-2xl font-medium tracking-[-0.01em] text-foreground">
                    {stage.title}
                  </h4>
                  <p className="mt-1.5 text-xs font-bold text-primary/90">{stage.subtitle}</p>
                  <p className="mt-4 text-sm leading-[1.65] text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border-subtle pt-4 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Entregável:</span>{' '}
                  {stage.deliverable}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
