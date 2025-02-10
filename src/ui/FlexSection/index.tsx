import React from "react";

export const FlexSection = ({
  children,
  gap = "10",
  w = "1240px",
  className,
}: {
  children: React.ReactNode;
  gap?: string;
  w?: string;
  className?: string;
}) => {
  return (
    <section
      className={`flex flex-col items-center w-full ${"gap-" + gap} ${
        "max-w-[" + w + "]"
      } ${className}`}
    >
      {children}
    </section>
  );
};
