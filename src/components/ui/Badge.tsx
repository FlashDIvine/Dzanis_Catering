import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "pill";
}) {
  if (variant === "dark") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/12 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-accent-light",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-badge-blink" />
        {children}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-pale px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[1px] text-accent-dark",
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
        "inline-flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[2px] text-accent-dark",
        className
      )}
    >
      <span className="h-[2px] w-6 rounded-full bg-accent" />
      {children}
    </div>
  );
}
