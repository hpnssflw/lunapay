import React from "react";

export const Badge = ({ children, bg = "primary" }) => {
  console.log("## bg", bg);
  return (
    <div className={`max-h-[51px] bg-${bg} px-2 w-fit rounded-[7px]`}>
      {children}
    </div>
  );
};
