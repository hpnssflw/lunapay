import React from "react";

const bgType = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
  white: "bg-white",
  default: "bg-default",
};

export const Badge = ({
  children,
  bg = "primary",
  className,
  text = "30px",
}: {
  children: React.ReactNode;
  bg?: keyof typeof bgType;
  className?: string;
  text?: string;
}) => {
  return (
    <p
      className={`max-h-[51px] y px-2 w-fit   rounded-[7px] text-[${text}] ${bgType[bg]} ${className}`}
    >
      {children}
    </p>
  );
};
