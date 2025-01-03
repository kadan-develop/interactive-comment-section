import React from "react";
import SmallCard from "./SmallCard";
import ButtonsPM from "./ButtonsPM";
import ButtonReply from "./ButtonReply";
import ButtonEdit from "./ButtonEdit";

import Avatar from "./Avatar";
import DeletePopUp from "./DeletePopUp";

export default function ReplyComponent({ users }) {
  console.log(users);

  return (
    <>
      <div className="grid grid-row-2 gap-5 justify-end">
        {users.replies.map((user) => {
          console.log(user);
          return (
            <>
              <SmallCard>
                <ButtonsPM score={user.score} />
                <Avatar
                  content={user.content}
                  createdAt={user.createdAt}
                  image={user.user.image.png}
                  username={user.user.username}
                />
                {user.user.username === "juliusomo" ? (
                  <ButtonEdit />
                ) : (
                  <ButtonReply />
                )}
              </SmallCard>
            </>
          );
        })}
      </div>

      <div className="absolute w-[2px] h-[348px] bg-[#E9EBF0] top-[305px] ml-10"></div>
      {/* <DeletePopUp /> */}
    </>
  );
}
