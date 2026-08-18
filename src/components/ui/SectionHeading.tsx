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
        "flex flex-col",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <Badge variant={isDark ? "dark" : "default"} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-serif text-[clamp(1.75rem,2.8vw,2.35rem)] font-semibold leading-[1.2] text-balance",
          isDark ? "text-white" : "text-primary-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-[540px] text-[0.95rem] leading-[1.8] text-pretty",
            isDark ? "text-white/55" : "text-text-mid"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
