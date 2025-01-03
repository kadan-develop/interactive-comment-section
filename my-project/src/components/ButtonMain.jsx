import React from "react";
export default function ButtonMain({ name, onAddComment }) {
  return (
    <button
      onClick={onAddComment}
      className="w-[104px] h-[48px] bg-[#5357B6] hover:bg-lily-default text-[#fff]  uppercase font-medium rounded-lg"
    >
      {name}
    </button>
  );
}
