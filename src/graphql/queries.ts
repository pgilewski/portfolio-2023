/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResources = /* GraphQL */ `
  query GetResources($id: ID!) {
    getResources(id: $id) {
      id
      title
      link
      description
      author
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourcesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        description
        author
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
