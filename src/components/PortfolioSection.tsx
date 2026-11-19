import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react';
import { ArchitecturalImage } from '@/src/components/ArchitecturalImage';
import { Button } from '@/src/components/ui/button';
import { PORTFOLIO_PROJECTS } from '@/src/data/migliore';
import type { PortfolioProject, ProjectCategory } from '@/src/types';

interface PortfolioSectionProps {
  onContactClick: () => void;
}

const FILTER_CATEGORIES: ProjectCategory[] = ['Todos', 'Residencial', 'Comercial'];

export function PortfolioSection({ onContactClick }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const selectedIndex = useMemo(() => {
    if (!selectedProjectId) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProjectId);
  }, [filteredProjects, selectedProjectId]);

  const selectedProject: PortfolioProject | null =
    selectedIndex >= 0 ? filteredProjects[selectedIndex] : null;

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null);
      } else if (event.key === 'ArrowRight' && filteredProjects.length > 1) {
        const nextIndex = (selectedIndex + 1) % filteredProjects.length;
        setSelectedProjectId(filteredProjects[nextIndex].id);
      } else if (event.key === 'ArrowLeft' && filteredProjects.length > 1) {
        const prevIndex = (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
        setSelectedProjectId(filteredProjects[prevIndex].id);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, selectedIndex, filteredProjects]);

  const getBentoSpanClass = (index: number) => {
    if (activeCategory !== 'Todos') {
      return 'md:col-span-6';
    }
    if (index === 0) return 'md:col-span-7';
    if (index === 1) return 'md:col-span-5';
    if (index === 2) return 'md:col-span-5';
    return 'md:col-span-7';
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho da Seção + Controles de Filtro */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col gap-8 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary">
              Acervo Selecionado
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.025em] leading-[1.04] text-foreground">
              Obras onde a marcenaria assume rigor arquitetônico.
            </h2>
            <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
              Curadoria de projetos residenciais e corporativos desenvolvidos integralmente do
              estudo volumétrico ao detalhamento executivo.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar projetos por tipologia"
            className="inline-flex w-fit items-center gap-1 rounded-sm border border-border bg-surface p-1"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] px-4 py-2 text-xs font-bold tracking-[0.04em] rounded-xs transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grade Assimétrica de Portfólio */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.06, ease: 'easeOut' }}
              className={`group flex flex-col border border-border bg-surface-elevated shadow-architectural transition-all duration-300 hover:-translate-y-1 hover:shadow-architectural-hover ${getBentoSpanClass(
                index
              )}`}
            >
              <button
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                aria-label={`Ampliar detalhes do projeto ${project.title}`}
                className="relative block w-full overflow-hidden bg-surface aspect-[4/3] text-left cursor-pointer"
              >
                <ArchitecturalImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 bottom-4 inline-flex h-10 w-10 items-center justify-center bg-background/90 text-foreground border border-border opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </button>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                    <span className="font-bold text-primary">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.areaSqm} m²</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-medium tracking-[-0.015em] text-foreground">
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="text-left hover:text-primary transition-colors cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-3 text-sm leading-[1.65] text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
                  <span className="text-xs text-muted-foreground">
                    {project.materials.slice(0, 2).join(' · ')}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-bold tracking-[0.04em] text-primary hover:text-primary-hover transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Ver memorial</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox / Monografia do Projeto */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Memorial arquitetônico de ${selectedProject.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProjectId(null)}
              className="fixed inset-0 bg-primary-deep/75 backdrop-blur-xs"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 grid max-h-[90vh] w-full max-w-[1080px] grid-cols-1 overflow-y-auto border border-border bg-background shadow-architectural-hover lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedProjectId(null)}
                aria-label="Fechar visualização do projeto"
                className="absolute top-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-border bg-background/95 text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>

              <div className="bg-surface lg:col-span-7 aspect-[4/3] lg:aspect-auto">
                <ArchitecturalImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums pr-12">
                    <span className="font-bold text-primary">{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.areaSqm} m²</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.year}</span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-foreground">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">
                    {selectedProject.architecturalConcept}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <p className="text-xs font-bold tracking-[0.1em] uppercase text-foreground">
                      Especificação Matérica
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {selectedProject.materials.map((material) => (
                        <li key={material} className="flex items-center gap-2.5">
                          <span className="h-px w-3 bg-primary shrink-0" aria-hidden="true" />
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-4 border-t border-border pt-6">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setSelectedProjectId(null);
                      onContactClick();
                    }}
                  >
                    Entrar em contato
                  </Button>

                  {filteredProjects.length > 1 && (
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <button
                        type="button"
                        onClick={() => {
                          const prevIndex =
                            (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
                          setSelectedProjectId(filteredProjects[prevIndex].id);
                        }}
                        className="inline-flex min-h-[40px] items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                        <span>Projeto anterior</span>
                      </button>
                      <span className="tabular-nums">
                        {selectedIndex + 1} / {filteredProjects.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const nextIndex = (selectedIndex + 1) % filteredProjects.length;
                          setSelectedProjectId(filteredProjects[nextIndex].id);
                        }}
                        className="inline-flex min-h-[40px] items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
                      >
                        <span>Próximo projeto</span>
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
