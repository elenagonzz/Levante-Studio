import { ElementType, ReactNode } from "react";

/**
 * Editorial container. Wide by default, with generous gutters
 * driven by the --spacing-gutter token.
 */
export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[112rem] px-[var(--spacing-gutter)] ${className}`}
    >
      {children}
    </Tag>
  );
}
