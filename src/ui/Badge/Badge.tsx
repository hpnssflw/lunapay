import React from "react";

export const Badge = ({
  children,
  bg = "primary",
  className,
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) => {
  const bgType = {
    primary: "bg-primary",
  };
  const styles = `max-h-[51px] bg-primary px-2 w-fit rounded-[7px] ${className}`;
  return <div className={styles}>{children}</div>;
};
