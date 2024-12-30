import React from "react";
export default function DeletePopUp() {
  return (
    <>
      <div className="absolute w-screen -top-5 left-0 h-screen z-20 bg-black opacity-50 "></div>
      <div className="flex flex-col top-[330px] left-[730px] gap-4 absolute w-[400px] h-[252px] pl-8 pt-8 rounded-[8px] bg-[#fff] z-50">
        <div>
          <h1 className="text-2xl text-[#334253] font-medium pb-5 ">
            Delete Comment
          </h1>
          <p className="text-[#67727E] w-[336px]">
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
        </div>

        <div className="flex gap-3.5">
          <button className="w-[161px] h-[48px] bg-[#67727E] text-[#fff]  font-medium uppercase rounded-[8px]">
            No, Cancel
          </button>
          <button className="w-[161px] h-[48px] bg-[#ED6368] text-[#fff] font-medium uppercase rounded-[8px]">
            Yes, Delete
          </button>
        </div>
      </div>
    </>
  );
}
