/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItems = /* GraphQL */ `
  mutation CreateItems(
    $input: CreateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    createItems(input: $input, condition: $condition) {
      id
      name
      description
      filePath
      like
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateItems = /* GraphQL */ `
  mutation UpdateItems(
    $input: UpdateItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    updateItems(input: $input, condition: $condition) {
      id
      name
      description
      filePath
      like
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteItems = /* GraphQL */ `
  mutation DeleteItems(
    $input: DeleteItemsInput!
    $condition: ModelItemsConditionInput
  ) {
    deleteItems(input: $input, condition: $condition) {
      id
      name
      description
      filePath
      like
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
