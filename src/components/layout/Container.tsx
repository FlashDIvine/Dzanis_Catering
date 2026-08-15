import { cn } from "@/lib/utils";

export function Container({
  className,
  containerClassName,
  children,
  as: Component = "section",
  id,
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  id?: string;
}) {
  return (
    <Component
      id={id}
      className={cn("w-full py-20 md:py-24 px-6 md:px-16 transition-colors", className)}
    >
      <div className={cn("w-full max-w-[1240px] mx-auto", containerClassName)}>
        {children}
      </div>
    </Component>
  );
}
