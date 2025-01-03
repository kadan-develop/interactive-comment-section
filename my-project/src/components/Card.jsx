import React, { useState } from "react";
import Avatar from "./Avatar";
import ButtonReply from "./ButtonReply";
import ButtonsPM from "./ButtonsPM";
import ReplyComponent from "./ReplyComponent";
import AddComment from "./AddComment";

function Card({ mainUser, users }) {
  // return (
  //   <div
  //     style={style}
  //     className={`relative flex justify-between w-[730px] h-fit bg-[#fff] p-6 rounded-lg`}
  //   >
  //     {children}
  //   </div>
  // );

  const [activeUserId, setActiveUserId] = useState(null);

  console.log(users);

  function handleClick(id) {
    setActiveUserId(id);
  }

  function handleAddComment() {
    console.log("Add comment");
    setActiveUserId(null);
  }

  return (
    <div className="flex flex-col gap-5">
      {users.map((user) => {
        console.log(user.id);

        return (
          <>
            <div className="relative flex flex-row gap-6 justify-between w-[730px] h-fit bg-[#fff] p-6 rounded-lg">
              <ButtonsPM score={user.score} />
              <Avatar
                content={user.content}
                createdAt={user.createdAt}
                image={user.user.image.png}
                username={user.user.username}
              />
              <ButtonReply handleReply={() => handleClick(user.id)} />
            </div>

            {activeUserId === user.id && (
              <AddComment
                userImg={mainUser.image.png}
                btnName={"Reply"}
                onAddComment={handleAddComment}
              />
            )}

            {user.replies.length > 0 ? <ReplyComponent users={user} /> : ""}

            {/* TO DO 
                -- ubacit do Small Card, username kerimu dava odpoved
             */}
          </>
        );
      })}
    </div>
  );
}

export default Card;
