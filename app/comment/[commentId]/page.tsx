import React from "react";

const CommentById = ({ params }: { params: { commentId: string } }) => {
  return (
    <div>
      <h1>Comment By Id Page: The Id of the Comment is: {params.commentId}</h1>
    </div>
  );
};

export default CommentById;
