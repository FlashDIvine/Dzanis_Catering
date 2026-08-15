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
          "inline-flex items-center gap-2 rounded-full border border-[rgba(125,184,50,0.25)] bg-[rgba(125,184,50,0.12)] px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[1.5px] text-[#9ED44F]",
          className
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#7DB832] animate-badge-blink" />
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[2px] text-[#5E8E22]",
        className
      )}
    >
      <span className="h-[2px] w-6 rounded-full bg-[#7DB832]" />
      {children}
    </div>
  );
}
