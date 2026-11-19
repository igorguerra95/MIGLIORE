import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover border border-transparent shadow-sm',
  outline:
    'bg-transparent text-foreground border border-border hover:border-primary hover:text-primary',
  ghost:
    'bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface border border-transparent',
  inverse:
    'bg-primary-foreground text-primary-deep hover:bg-surface border border-transparent shadow-sm',
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-xs tracking-[0.04em]',
  md: 'min-h-[44px] px-6 py-2.5 text-sm tracking-[0.02em]',
  lg: 'min-h-[48px] px-8 py-3 text-sm tracking-[0.03em]',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', type = 'button', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`inline-flex items-center justify-center gap-2 font-sans font-bold rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
