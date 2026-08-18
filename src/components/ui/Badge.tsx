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
      <span
        className={cn(
          "inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[2.5px] text-accent-light",
          className
        )}
      >
        <span className="h-px w-6 bg-accent-light/60" />
        {children}
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-accent-dark",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[2.5px] text-accent-dark",
        className
      )}
    >
      <span className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}
