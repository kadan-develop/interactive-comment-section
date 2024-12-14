import React from "react";
import ButtonMain from "./ButtonMain";

export default function AddComment({ userImg, btnName }) {
  console.log(userImg);

  return (
    <div className="flex gap-4">
      <img className="w-[40px] h-[40px]" src={userImg} alt="" />
      <textarea
        className="w-[506px] h-[96px] border-solid border-2 border-[#E9EBF0] rounded-lg text-[#67727E] font-normal pl-6 pt-3"
        name="comment"
        placeholder="Add Comment..."
      ></textarea>
      <ButtonMain name={btnName} />
    </div>
  );
}
