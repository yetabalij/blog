import React from "react";

const PostByAuthor = ({
  params,
}: {
  params: { postId: any; authorId: any };
}) => {
  return (
    <div>
      <h1>
        Post By Author Page: Post {params.postId} created by Author{" "}
        {params.authorId}
      </h1>
    </div>
  );
};

export default PostByAuthor;
