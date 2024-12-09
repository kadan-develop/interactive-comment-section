import React from "react";
import Card from "./components/Card";
import data from "../data.json";

function App() {
  const user = data.comments[0].user.image.png;

  return (
    <>
      <div className="container md flex flex-col  space-y-5">
        <Card user={user} />
      </div>
    </>
  );
}

export default App;
