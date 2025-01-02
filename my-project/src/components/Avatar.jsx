import React from "react";

function Avatar({ content, createdAt, image, username }) {
  return (
    <div className="w-auto">
      <div className="flex gap-3">
        <img className="w-[32px] h-[32px]" src={image} alt="avatar-img" />
        <h3 className="font-medium text-[#334253]">{username}</h3>
        {username === "juliusomo" && (
          <div className="w-[36px] h-[19px] text-[#fff] bg-[#5357B6] font-medium text-[13px] text-center rounded-sm">
            you
          </div>
        )}
        <p className="font-regular text-[#67727E]">{createdAt}</p>
      </div>
      <p className="font-regular text-[#67727E] mt-4">{content}</p>
    </div>
  );
}

export default Avatar;
