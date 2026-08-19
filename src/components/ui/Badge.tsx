import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "pill" | "gold";
}) {
  if (variant === "dark") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-white/90 backdrop-blur-xs",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
        {children}
      </div>
    );
  }

  if (variant === "gold") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold-pale px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[1px] text-gold",
          className
        )}
      >
        {children}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-pale px-3 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[1px] text-accent-dark",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-[2px] text-primary-dark/80",
        className
      )}
    >
      <span className="h-[2px] w-5 rounded-full bg-accent" />
      {children}
    </div>
  );
}
