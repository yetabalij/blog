import React from "react";

const CommentByAuthor = ({
  params,
}: {
  params: { commentId: string; authorId: string };
}) => {
  return (
    <div>
      <h1>
        Comment By Author Page: Comment {params.commentId} for Author{" "}
        {params.authorId}
      </h1>
    </div>
  );
};

export default CommentByAuthor;
