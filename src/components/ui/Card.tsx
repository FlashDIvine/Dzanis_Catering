import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-foreground/5 transition-all hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
