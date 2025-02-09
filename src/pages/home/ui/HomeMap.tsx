import React from "react";

import map from "../../../../public/assets/imgs/home/map.png";

export const HomeMap = () => {
  return (
    <div className="max-w-[1440px] xl:h-[712px] left-[130px] relative bg-cover bg-no-repeat bg-center">
      <img src={map} alt="" className="w-full  relative" />
    </div>
  );
};
