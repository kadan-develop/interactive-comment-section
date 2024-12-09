import React from "react";

function Avatar({ user, lastPosted, text }) {
  console.log(user);

  return (
    <div className="">
      <div className="flex gap-3">
        <img className="w-[32px] h-[32px]" src={user} alt="" />
        <h3 className="font-medium text-[#334253]">amyrobson</h3>
        <p className="font-regular text-[#67727E]">1 month ago</p>
      </div>
      <p className="font-regular text-[#67727E] ">
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
    </div>
  );
}

export default Avatar;
