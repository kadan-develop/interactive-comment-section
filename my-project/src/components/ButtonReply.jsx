import React from "react";

export default function ButtonReply({ handleReply }) {
  return (
    <button
      onClick={handleReply}
      className="absolute right-6 flex items-center gap-2 hover:text-lily-default text-[#5357B6] font-medium"
    >
      <img src=".\src\images\icon-reply.svg" alt="reply-button" />
      Reply
    </button>
  );
}
