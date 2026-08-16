import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  badge,
  title,
  description,
  className,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-2.5",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && <Badge variant={isDark ? "dark" : "default"}>{badge}</Badge>}
      <h2
        className={cn(
          "font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold leading-[1.2]",
          isDark ? "text-white" : "text-primary-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[520px] text-[0.95rem] leading-[1.85]",
            isDark ? "text-white/60" : "text-text-mid"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
