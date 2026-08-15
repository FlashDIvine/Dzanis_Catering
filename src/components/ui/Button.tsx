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
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2D6E] disabled:pointer-events-none disabled:opacity-50 active:scale-95",
        {
          "bg-[#7B2D6E] text-white hover:bg-[#5A1F50] shadow-[0_6px_22px_rgba(123,45,110,0.22)] hover:-translate-y-0.5":
            variant === "primary",
          "bg-[#5A1F50] text-white hover:bg-[#3D1238] shadow-md hover:-translate-y-0.5":
            variant === "secondary",
          "bg-[#25D366] text-white hover:bg-[#1db954] shadow-[0_8px_28px_rgba(37,211,102,0.38)] hover:-translate-y-0.5":
            variant === "whatsapp",
          "border-[1.5px] solid border-white/25 text-white/85 hover:bg-white/10 hover:text-white":
            variant === "ghost",
          "border-[1.5px] solid border-[#7B2D6E]/20 text-[#7B2D6E] hover:bg-[#7B2D6E] hover:text-white":
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
