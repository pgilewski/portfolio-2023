/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourcesInput = {
  id?: string | null,
  title: string,
  link: string,
  description: string,
  author?: string | null,
};

export type ModelResourcesConditionInput = {
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelResourcesConditionInput | null > | null,
  or?: Array< ModelResourcesConditionInput | null > | null,
  not?: ModelResourcesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Resources = {
  __typename: "Resources",
  id: string,
  title: string,
  link: string,
  description: string,
  author?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateResourcesInput = {
  id: string,
  title?: string | null,
  link?: string | null,
  description?: string | null,
  author?: string | null,
};

export type DeleteResourcesInput = {
  id: string,
};

export type ModelResourcesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelResourcesFilterInput | null > | null,
  or?: Array< ModelResourcesFilterInput | null > | null,
  not?: ModelResourcesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelResourcesConnection = {
  __typename: "ModelResourcesConnection",
  items:  Array<Resources | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionResourcesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
  or?: Array< ModelSubscriptionResourcesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateResourcesMutationVariables = {
  input: CreateResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type CreateResourcesMutation = {
  createResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateResourcesMutationVariables = {
  input: UpdateResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type UpdateResourcesMutation = {
  updateResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteResourcesMutationVariables = {
  input: DeleteResourcesInput,
  condition?: ModelResourcesConditionInput | null,
};

export type DeleteResourcesMutation = {
  deleteResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetResourcesQueryVariables = {
  id: string,
};

export type GetResourcesQuery = {
  getResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourcesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources?:  {
    __typename: "ModelResourcesConnection",
    items:  Array< {
      __typename: "Resources",
      id: string,
      title: string,
      link: string,
      description: string,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
  owner?: string | null,
};

export type OnCreateResourcesSubscription = {
  onCreateResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateResourcesSubscription = {
  onUpdateResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteResourcesSubscriptionVariables = {
  filter?: ModelSubscriptionResourcesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteResourcesSubscription = {
  onDeleteResources?:  {
    __typename: "Resources",
    id: string,
    title: string,
    link: string,
    description: string,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
