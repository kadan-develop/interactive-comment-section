import React from "react";

function Avatar({ content, createdAt, image, username }) {
  return (
    <div className="mx-6">
      <div className="flex gap-3">
        <img className="w-[32px] h-[32px]" src={image} alt="avatar-img" />
        <h3 className="font-medium text-[#334253]">{username}</h3>
        <p className="font-regular text-[#67727E]">{createdAt}</p>
      </div>
      <p className="font-regular text-[#67727E] mt-4">{content}</p>
    </div>
  );
}

export default Avatar;
