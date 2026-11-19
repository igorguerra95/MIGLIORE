import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { STUDIO_INFO } from '@/src/data/migliore';
import type { ContactFormData } from '@/src/types';

interface ContactSectionProps {
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Residencial',
  estimatedArea: '',
  message: '',
};

export function ContactSection({ nameInputRef }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: ContactFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim() || data.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp com DDD.';
    }

    if (!data.message.trim() || data.message.trim().length < 10) {
      nextErrors.message = 'Descreva brevemente o escopo ou objetivo do seu ambiente.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12"
        >
          {/* Painel Esquerdo: Dados Institucionais em Azul Marinho Profundo */}
          <div className="flex flex-col justify-between bg-navy-architectural p-8 sm:p-10 lg:col-span-5 text-primary-foreground shadow-architectural">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary-foreground/75">
                Atendimento &amp; Briefing
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium tracking-[-0.02em] leading-[1.05] text-primary-foreground">
                Converse com a nossa direção de arquitetura.
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-[1.7] text-primary-foreground/85">
                Compartilhe as plantas, a metragem e o prazo desejado para agendarmos uma reunião
                técnica inicial de alinhamento.
              </p>

              <dl className="mt-10 space-y-6 border-t border-primary-foreground/20 pt-8 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/80" strokeWidth={1.5} />
                  <div>
                    <dt className="text-xs font-bold tracking-[0.08em] uppercase text-primary-foreground/70">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-primary-foreground">{STUDIO_INFO.address}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/80" strokeWidth={1.5} />
                  <div>
                    <dt className="text-xs font-bold tracking-[0.08em] uppercase text-primary-foreground/70">
                      Telefone / WhatsApp
                    </dt>
                    <dd className="mt-1 tabular-nums text-primary-foreground">
                      {STUDIO_INFO.phoneDisplay}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/80" strokeWidth={1.5} />
                  <div>
                    <dt className="text-xs font-bold tracking-[0.08em] uppercase text-primary-foreground/70">
                      Horário de Atendimento
                    </dt>
                    <dd className="mt-1 text-primary-foreground">{STUDIO_INFO.hours}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 border-t border-primary-foreground/20 pt-7">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-primary-foreground px-6 py-3 text-sm font-bold tracking-[0.03em] text-primary-deep hover:bg-surface transition-colors duration-200 whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                <span>Entrar em contato via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Painel Direito: Formulário Validado de Solicitação de Projeto */}
          <div className="border border-border bg-surface-elevated p-8 sm:p-10 lg:col-span-7 shadow-architectural">
            {submitted ? (
              <div className="flex h-full flex-col items-start justify-center py-8">
                <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-serif text-3xl sm:text-4xl font-medium text-foreground">
                  Solicitação registrada com sucesso.
                </h3>
                <p className="mt-3 max-w-lg text-base leading-[1.7] text-muted-foreground">
                  Agradecemos pelo contato, <strong className="text-foreground">{formData.name}</strong>.
                  Nossa equipe técnica analisará as informações enviadas para o projeto{' '}
                  <strong className="text-foreground">{formData.projectType.toLowerCase()}</strong> e
                  retornará pelo telefone{' '}
                  <span className="tabular-nums">{formData.phone}</span> ou pelo e-mail{' '}
                  <span>{formData.email}</span>.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" size="md" onClick={handleReset}>
                    Enviar nova solicitação
                  </Button>
                  <a
                    href={STUDIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center border border-border px-6 py-2.5 text-sm font-bold text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    Falar agora pelo WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-medium tracking-[-0.015em] text-foreground">
                    Solicitação de atendimento técnico
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Preencha os campos abaixo para iniciar o estudo do seu ambiente planejado.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground"
                    >
                      Nome completo
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Ex.: Mariana Vasconcelos"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-2 w-full min-h-[44px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs font-bold text-primary">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="nome@empresa.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-2 w-full min-h-[44px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs font-bold text-primary">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="(00) 00000-0000"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-2 w-full min-h-[44px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors tabular-nums"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs font-bold text-primary">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground"
                    >
                      Área aproximada (m²)
                    </label>
                    <input
                      id="contact-area"
                      name="estimatedArea"
                      type="text"
                      value={formData.estimatedArea}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, estimatedArea: e.target.value }))
                      }
                      placeholder="Ex.: 180 m² (opcional)"
                      className="mt-2 w-full min-h-[44px] border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground">
                    Tipologia do projeto
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(['Residencial', 'Comercial', 'Corporativo'] as const).map((option) => {
                      const active = formData.projectType === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, projectType: option }))
                          }
                          className={`min-h-[40px] border px-4 py-2 text-xs font-bold tracking-[0.04em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            active
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-[0.06em] uppercase text-foreground"
                  >
                    Escopo e localização do imóvel
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Descreva os ambientes prioritários, fase atual da obra e previsão de início."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-2 w-full border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none transition-colors resize-y"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 text-xs font-bold text-primary">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" variant="primary" size="lg">
                    Entrar em contato
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Atendimento confidencial e sem compromisso.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
