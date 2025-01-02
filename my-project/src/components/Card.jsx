import React from "react";
import Avatar from "./Avatar";
import ButtonReply from "./ButtonReply";
import ButtonsPM from "./ButtonsPM";
import ReplyComponent from "./ReplyComponent";
import AddComment from "./AddComment";

function Card({ children, width, style, users }) {
  // return (
  //   <div
  //     style={style}
  //     className={`relative flex justify-between w-[730px] h-fit bg-[#fff] p-6 rounded-lg`}
  //   >
  //     {children}
  //   </div>
  // );

  console.log(users);

  return (
    <div className="flex flex-col gap-5">
      {users.map((user) => {
        return (
          <>
            <div className="relative flex flex-col w-[730px] h-fit bg-[#fff] p-6 rounded-lg">
              <ButtonsPM score={user.score} />
              <Avatar
                content={user.content}
                createdAt={user.createdAt}
                image={user.user.image.png}
                username={user.user.username}
              />
              <ButtonReply />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
