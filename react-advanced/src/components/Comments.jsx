import React from "react";
import CommentItem from "./CommentItem";
const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return <CommentItem key={index} {...comment} />;
      })}
    </div>
  );
};

export default Comments;
