import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS_INFO } from "../../qraphql/queries";

function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  console.log({ loading, data, errors });

  if (loading) return <h3>Loading...</h3>;

  if (errors) return <h3>An error occured!</h3>;

  return <div>Authors</div>;
}

export default Authors;
