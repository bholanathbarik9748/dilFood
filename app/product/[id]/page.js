import Productpage from "@/src/pages/productPage/Productpage";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return (
    <>
      <Productpage id={id} />
    </>
  );
};

export default page;
