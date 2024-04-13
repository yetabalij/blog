import React from "react";

const Shop = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      <h1>Shop Page: The Route Segments are:</h1>

      {params?.slug?.map((segment) => {
        return segment + "/";
      })}
    </div>
  );
};

export default Shop;
