import React from "react";
import Comments from "./Comments";

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 2 },
  { title: "comment3", content: "message3", likes: 3 },
];
const Memo = () => {
  const [comments, setComments] = React.useState(commentList);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setComments((prev) => [
        ...prev,
        {
          title: `comment${prev.length + 1}`,
          content: `message${prev.length + 1}`,
          likes: prev.length + 1,
        },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [comments]);

  return (
    <div>
      <p>Memo</p>
      <Comments comments={comments} />
    </div>
  );
};

export default Memo;
