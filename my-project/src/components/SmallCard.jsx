import React from "react";

export default function SmallCard({ children }) {
  return (
    <div
      className={
        "relative flex gap-6 justify-between w-[642px] h-fit bg-[#fff] p-6 rounded-lg"
      }
    >
      {children}
    </div>
  );
}
