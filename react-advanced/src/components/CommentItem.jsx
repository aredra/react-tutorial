import React, { Profiler, memo } from "react";

const CommentItem = ({ title, content, likes }) => {
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(
      `CommentItem: ${id} ${phase} ${actualDuration} ${baseDuration} ${startTime} ${commitTime} ${interactions}`
    );
  };
  const handleClick = () => {
    alert(`${title} Click!!`);
  };
  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="" onClick={handleClick}>
        <h4>{title}</h4>
        <p>{content}</p>
        <p>{likes}</p>
      </div>
    </Profiler>
  );
};

export default memo(CommentItem);
