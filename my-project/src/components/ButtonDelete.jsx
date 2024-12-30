import React from "react";
export default function ButtonDelete({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="absolute right-24 flex items-center gap-2 hover:text-pale-red text-[#ED6368] font-medium"
    >
      <img src=".\src\images\icon-delete.svg" alt="reply-button" />
      Delete
    </button>
  );
}
