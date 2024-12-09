import React from "react";
import Avatar from "./Avatar";

function Card({ user }) {
  return (
    <div className="relative flex justify-between w-[730px] h-[167px] bg-[#fff] p-6 rounded-lg">
      {/* plus-minus buttons */}
      <div className="flex flex-col justify-around items-center bg-[#F5F6FA] w-[40px] h-[100px] rounded-[10px] text-[#5357B6] font-medium">
        <button>
          <img src="./src/images/icon-plus.svg" alt="plus-icon" />
        </button>
        12
        <button>
          <img src="./src/images/icon-minus.svg" alt="plus-icon" />
        </button>
      </div>

      <Avatar user={user} />
      {/* Reply button */}
      <button className="absolute right-6 flex items-center gap-2 text-[#5357B6] font-medium">
        <img src=".\src\images\icon-reply.svg" alt="reply-button" />
        Reply
      </button>
    </div>
  );
}

export default Card;
