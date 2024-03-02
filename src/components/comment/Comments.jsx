import { useQuery } from "@apollo/client";
import { GET_BLOG_COMMENTS } from "../../qraphql/queries";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });

  return <div>Comments</div>;
}

export default Comments;
