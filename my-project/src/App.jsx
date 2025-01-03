import React, { useState } from "react";
import Card from "./components/Card";
import data from "../data.json";
import AddComment from "./components/AddComment";

function App() {
  const users = data.comments;
  const mainUser = data.currentUser;
  return (
    <>
      <div className="container md flex flex-col  space-y-5">
        <Card users={users} mainUser={mainUser} />
        <AddComment userImg={mainUser.image.png} btnName={"Send"} />
      </div>
    </>
  );
}

export default App;
