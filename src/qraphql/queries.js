import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
      slug
      title
      id
    }
  }
`;

export { GET_BLOGS_INFO };
