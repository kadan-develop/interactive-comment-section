import React from "react";

function Card({ children, width }) {
  return (
    <div
      className={`relative flex justify-between w-[730px] h-fit bg-[#fff] p-6 rounded-lg`}
    >
      {children}
    </div>
  );
}

export default Card;
