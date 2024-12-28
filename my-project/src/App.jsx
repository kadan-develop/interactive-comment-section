import React from "react";
import Card from "./components/Card";
import data from "../data.json";
import Avatar from "./components/Avatar";
import ButtonReply from "./components/ButtonReply";
import ButtonsPM from "./components/ButtonsPM";
import AddComment from "./components/AddComment";
import ReplyComponent from "./components/ReplyComponent";

function App() {
  const users = data.comments;
  const test = data.comments[1].replies;

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
                <ButtonReply />
              </Card>

              {user.replies.length > 0 ? <ReplyComponent users={user} /> : ""}
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
