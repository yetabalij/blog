import React from "react";

const ReviewByPost = ({
  params,
}: {
  params: { reviewId: string; postId: string };
}) => {
  return (
    <div>
      <h1>
        Review By Post Page: Review {params.reviewId} for Post {params.postId}
      </h1>
    </div>
  );
};

export default ReviewByPost;
