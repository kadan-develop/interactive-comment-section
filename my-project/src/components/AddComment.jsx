import React from "react";
import ButtonMain from "./ButtonMain";

export default function AddComment({ userImg, btnName, onAddComment }) {
  return (
    <div className="flex gap-4 w-[730px] h-fit bg-[#fff] p-6 rounded-lg">
      <img className="w-[40px] h-[40px]" src={userImg} alt="" />
      <textarea
        className="w-[506px] h-[96px] border-solid border-2 border-[#E9EBF0] rounded-lg text-[#67727E] focus:outline-[#5357B6] font-normal pl-6 pt-3"
        name="comment"
        placeholder="Add Comment..."
      ></textarea>
      <ButtonMain onAddComment={onAddComment} name={btnName} />
    </div>
  );
}
