import React, { useState } from "react";
import Avatar from "./Avatar";
import ButtonReply from "./ButtonReply";
import ButtonsPM from "./ButtonsPM";
import ReplyComponent from "./ReplyComponent";
import AddComment from "./AddComment";
import SmallCard from "./SmallCard";

function Card({ mainUser, users }) {
  const [activeUserId, setActiveUserId] = useState(null);
  const [mainUserId, setMainUserId] = useState(null);
  const [reply, setReply] = useState("");

  function handleClick(id) {
    setActiveUserId(id);
  }

  function handleAddComment(id) {
    if (reply.trim() !== "") {
      setMainUserId(id);
      setActiveUserId(null);
    }
  }

  function handleOnChange(e) {
    console.log(e.target.value);
    setReply(e.target.value);
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
                onAddComment={() => handleAddComment(user.id)}
                handleOnChange={handleOnChange}
                reply={reply}
              />
            )}

            {mainUserId === user.id && <SmallCard>{reply}</SmallCard>}

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
