/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResources = /* GraphQL */ `
  mutation CreateResources(
    $input: CreateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    createResources(input: $input, condition: $condition) {
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
export const updateResources = /* GraphQL */ `
  mutation UpdateResources(
    $input: UpdateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    updateResources(input: $input, condition: $condition) {
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
export const deleteResources = /* GraphQL */ `
  mutation DeleteResources(
    $input: DeleteResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    deleteResources(input: $input, condition: $condition) {
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
