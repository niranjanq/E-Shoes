import React from "react";

const Star = ({ star,color }) => {
  console.log(star);
  return (
    <div className="-mt-2">
      {[1, 2, 3, 4, 5].map((data, ind) => {
        console.log(data);
        return (data <= star) ? (
          <span className="name font-medium text-black text-opacity-50 text-lg">
            {!color?"☆":"⭐"}
          </span>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default Star;
