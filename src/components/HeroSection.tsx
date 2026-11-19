import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';
import { HERO_MEDIA, STUDIO_METRICS } from '@/src/data/migliore';

interface HeroSectionProps {
  onContactClick: () => void;
}

function CountUpMetric({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Tipografia Arquitetônica & Slogan */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between lg:col-span-6 lg:py-4"
          >
            <div>
              <motion.p
                variants={heroItemVariants}
                className="text-xs sm:text-sm font-sans font-bold tracking-[0.14em] uppercase text-primary mb-5"
              >
                MIGLIORE · Ambientes Planejados
              </motion.p>

              <motion.h1
                variants={heroItemVariants}
                className="font-serif font-medium text-foreground tracking-[-0.03em] leading-[0.98] text-[clamp(3rem,5.4vw,5.5rem)]"
              >
                A geometria do silêncio aplicada ao morar contemporâneo.
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="mt-7 max-w-[54ch] text-base sm:text-lg leading-[1.7] text-muted-foreground font-light"
              >
                Arquitetura de interiores autoral e marcenaria de alta precisão para residências e
                espaços corporativos que privilegiam proporção, luz natural e longevidade construtiva.
              </motion.p>
            </div>

            <motion.div
              variants={heroItemVariants}
              className="mt-9 flex flex-wrap items-center gap-5 pt-4"
            >
              <Button variant="primary" size="lg" onClick={onContactClick}>
                Entrar em contato
              </Button>
              <a
                href="#portfolio"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-bold tracking-[0.03em] text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explorar portfólio</span>
                <ArrowDownRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna Direita: Fotografia Autoral em Moldura Estrutural */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 overflow-hidden border border-border bg-surface shadow-architectural aspect-[16/10] lg:aspect-auto lg:min-h-[460px]">
              <ArchitecturalImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                priority
                fallbackTitle={HERO_MEDIA.captionTitle}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <span className="font-bold text-foreground">{HERO_MEDIA.captionTitle}</span>
              <span>{HERO_MEDIA.captionMeta}</span>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Arquitetônicas em Largura Integral */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 sm:mt-16 lg:mt-20 border-y border-border py-8 sm:py-10"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {STUDIO_METRICS.map((metric) => (
              <div key={metric.id} className="flex flex-col justify-between">
                <p className="font-serif text-4xl sm:text-[44px] font-semibold tracking-[-0.02em] text-primary-deep leading-none">
                  <CountUpMetric value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-3 text-sm font-bold tracking-[0.02em] text-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
