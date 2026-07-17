import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.9375rem] font-medium transition-all duration-200 ease-premium disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-ink-950 text-white hover:bg-ink-800 active:bg-ink-900 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100",
  accent: "bg-accent-400 text-ink-950 hover:bg-accent-300 active:bg-accent-500",
  secondary:
    "bg-transparent text-ink-950 ring-1 ring-inset ring-ink-950/15 hover:ring-ink-950/30 hover:bg-ink-950/[0.03] dark:text-white dark:ring-white/20 dark:hover:bg-white/5",
  ghost: "bg-transparent text-ink-950 hover:bg-ink-950/[0.05] dark:text-white dark:hover:bg-white/10",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6",
  lg: "h-[3.25rem] px-7 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
}

type ButtonProps = ButtonOwnProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = ButtonOwnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
);
Button.displayName = "Button";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
);
LinkButton.displayName = "LinkButton";
