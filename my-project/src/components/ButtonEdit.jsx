import React from "react";
import ButtonDelete from "./ButtonDelete";

export default function ButtonEdit() {
  return (
    <>
      <ButtonDelete />
      <button className="absolute right-6 flex items-center gap-2 hover:text-lily-default text-[#5357B6]  font-medium">
        <img src=".\src\images\icon-edit.svg" alt="reply-button" />
        Edit
      </button>
    </>
  );
}
