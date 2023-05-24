import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT


export const getPosts = async () => {
  const query =gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            slug
            name
          }
        }
      }
    }
  }
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
    
}
