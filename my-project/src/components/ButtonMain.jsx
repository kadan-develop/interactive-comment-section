import React from "react";
export default function ButtonMain({ name }) {
  return (
    <button className="w-[104px] h-[48px] bg-[#5357B6] text-[#fff]  uppercase font-medium rounded-lg">
      {name}
    </button>
  );
}
