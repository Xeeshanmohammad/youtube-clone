import React from "react";
import { CommentData } from "./CommentData";

const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-md rounded-md bg-gray-100 my-2">
      <img
        className="w-8 h-8"
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="profile"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

function CommentContainer() {
  return (
    <div className="m-6 px-2">
      <div className="text-xl font-bold">Comments :</div>
      <CommentList comments={CommentData} />
    </div>
  );
}

export default CommentContainer;
