import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export const LinkStyled = ({
  to = "/",
  label,
  iconSide = "left",
  iconBg,
  iconTextColor,
  labelColor,
}: {
  to: string;
  label: string;
  iconSide?: string;
  iconBg?: string;
  iconTextColor?: string;
  labelColor?: string;
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center  gap-3 ${
        iconSide === "left" ? "flex-row" : "flex-row-reverse justify-end"
      }`}
    >
      <div
        className={`h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
      >
        <ArrowUpRight strokeWidth={1} size={38} color={iconTextColor} />
      </div>
      <span className={labelColor}>{label}</span>
    </Link>
  );
};
