import React from "react";
import CommentItem from "./CommentItem";
const Comments = ({ commentList }) => {
  return (
    <div>
      {commentList.map((comment, index) => {
        return <CommentItem key={index} {...comment} />;
      })}
    </div>
  );
};

export default Comments;
