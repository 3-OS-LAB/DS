import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center"
      )}
    >
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-6">{title}</h2>

      {description && (
        <p className="mt-6">{description}</p>
      )}
    </div>
  );
}