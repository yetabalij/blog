import React from "react";

const PostById = ({ params }: { params: { postId: string } }) => {
  return (
    <div>
      <h1>Post By Id Page: The Id of the Post Is: {params.postId}</h1>
    </div>
  );
};

export default PostById;
