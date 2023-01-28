/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResources = /* GraphQL */ `
  subscription OnCreateResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onCreateResources(filter: $filter, owner: $owner) {
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
export const onUpdateResources = /* GraphQL */ `
  subscription OnUpdateResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onUpdateResources(filter: $filter, owner: $owner) {
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
export const onDeleteResources = /* GraphQL */ `
  subscription OnDeleteResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onDeleteResources(filter: $filter, owner: $owner) {
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
