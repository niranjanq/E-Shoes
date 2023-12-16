import React, { useState } from "react";

import Star from "./Star";

const Card = ({ img, name, price, star, sale, canceledPrice }) => {
  const [ishovered, setIshovered] = useState(false);
  return (
    <div
      className="w-[310px] h-[60%] flex flex-col items-center gap-6 relative"
      onMouseEnter={() => {
        setIshovered(true);
      }}
      onMouseLeave={() => {
        setIshovered(false);
      }}
    >
      <div className="imgcon w-full h-[60%] relative">
        <img className="w-full h-full" src={img} alt={name} />
        {ishovered ? (
          <div className="review w-full h-[30px] bg-black bg-opacity-60 absolute bottom-0 text-white justify-center flex items-center">
            Quick View
          </div>
        ) : (
          ""
        )}
      </div>
      {sale ? (
        <div className="sale absolute rounded-full p-1 aspect-square top-[-10px] right-[-10px] bg-[#6e7051] text-xs text-white flex items-center justify-center text-center">
          Sale!
        </div>
      ) : (
        ""
      )}
      <div className="content flex flex-col gap-1 items-center">
        <div className="name font-semibold">{name}</div>
        <div className="name font-semibold">
          <span className="line-through text-sm text-black text-opacity-30">
            {canceledPrice ? `$${canceledPrice} ` : ""}
          </span>
          <span className="text-black text-opacity-50">${price}</span>
        </div>
        <Star star={star} color={false} />
      </div>
    </div>
  );
};

export default Card;
