import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-primary text-white hover:bg-primary-dark":
            variant === "primary",
          "bg-primary-dark text-white hover:bg-primary-deep":
            variant === "secondary",
          "bg-[#25D366] text-white hover:bg-[#1db954]":
            variant === "whatsapp",
          "border border-white/25 text-white/85 hover:bg-white/10 hover:text-white":
            variant === "ghost",
          "border border-primary/25 text-primary hover:bg-primary hover:text-white":
            variant === "outline",
          "px-4 py-2 text-xs": size === "sm",
          "px-6 py-3 text-sm": size === "md",
          "px-8 py-4 text-[0.95rem]": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
