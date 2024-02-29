import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../qraphql/queries";
import Loader from "../../shared/Loader";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (errors) return <h3>An error occured!</h3>;
  return <div>BlogPage</div>;
}

export default BlogPage;
