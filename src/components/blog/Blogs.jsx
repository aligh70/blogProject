import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../qraphql/queries";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, errors });
  return <div>Blogs</div>;
}

export default Blogs;
