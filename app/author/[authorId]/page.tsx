import React from "react";

const AuthorById = ({ params }: { params: { authorId: string } }) => {
  return (
    <div>
      <h1>Author By Id Page: The Id of the Author is {params.authorId}</h1>
    </div>
  );
};

export default AuthorById;
