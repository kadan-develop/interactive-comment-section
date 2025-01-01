import React, { useState } from "react";
import Card from "./components/Card";
import data from "../data.json";
import Avatar from "./components/Avatar";
import ButtonReply from "./components/ButtonReply";
import ButtonsPM from "./components/ButtonsPM";
import AddComment from "./components/AddComment";
import ReplyComponent from "./components/ReplyComponent";
import DeletePopUp from "./components/DeletePopUp";

function App() {
  const users = data.comments;
  const test = data.comments[1].replies;

  const [comp, setComp] = useState(null);

  function userReply(id) {
    const style = {
      width: "642px",
    };

    const pickUser = users.filter((user) => user.id === id);
    const result =
      pickUser[0]?.replies.length > 0 ? (
        <Card style={style}>
          <AddComment userImg={data.currentUser.image.png} btnName={"Reply"} />
        </Card>
      ) : (
        <Card>
          <AddComment userImg={data.currentUser.image.png} btnName={"Reply"} />
        </Card>
      );

    setComp(result);
  }

  return (
    <>
      <div className="container md flex flex-col  space-y-5">
        {users.map((user) => {
          return (
            <>
              <Card>
                <ButtonsPM score={user.score} />
                <Avatar
                  content={user.content}
                  createdAt={user.createdAt}
                  image={user.user.image.png}
                  username={user.user.username}
                />
                <ButtonReply
                  userReply={() => {
                    userReply(user.id);
                  }}
                />
              </Card>

              {user.replies.length === 0 ? comp : ""}

              {user.replies.length > 0 ? (
                <ReplyComponent
                  userReply={userReply}
                  users={user}
                  comp={comp}
                />
              ) : (
                ""
              )}
            </>
          );
        })}

        <Card>
          <AddComment userImg={data.currentUser.image.png} btnName={"Send"} />
        </Card>
      </div>
    </>
  );
}

export default App;
