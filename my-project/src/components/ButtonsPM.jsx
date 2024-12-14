import React from "react";
export default function ButtonsPM({ score }) {
  return (
    <div className="flex flex-col justify-around items-center shrink-0 bg-[#F5F6FA] w-[40px] h-[100px] rounded-[10px] text-[#5357B6] font-medium">
      <button>
        <img src="./src/images/icon-plus.svg" alt="plus-icon" />
      </button>
      {score}
      <button>
        <img src="./src/images/icon-minus.svg" alt="plus-icon" />
      </button>
    </div>
  );
}
