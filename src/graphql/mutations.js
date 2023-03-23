/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      adresse
      email
      localisation
      contact
      menus {
        items {
          id
          name
          price
          description
          createdAt
          updatedAt
          restaurantMenusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      adresse
      email
      localisation
      contact
      menus {
        items {
          id
          name
          price
          description
          createdAt
          updatedAt
          restaurantMenusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      adresse
      email
      localisation
      contact
      menus {
        items {
          id
          name
          price
          description
          createdAt
          updatedAt
          restaurantMenusId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      name
      price
      description
      image {
        type
        height
        width
        path
      }
      video {
        type
        height
        width
        path
      }
      ingredients {
        name
        image {
          type
          height
          width
          path
        }
      }
      category {
        name
        subCategory {
          name
        }
      }
      createdAt
      updatedAt
      restaurantMenusId
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      name
      price
      description
      image {
        type
        height
        width
        path
      }
      video {
        type
        height
        width
        path
      }
      ingredients {
        name
        image {
          type
          height
          width
          path
        }
      }
      category {
        name
        subCategory {
          name
        }
      }
      createdAt
      updatedAt
      restaurantMenusId
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      name
      price
      description
      image {
        type
        height
        width
        path
      }
      video {
        type
        height
        width
        path
      }
      ingredients {
        name
        image {
          type
          height
          width
          path
        }
      }
      category {
        name
        subCategory {
          name
        }
      }
      createdAt
      updatedAt
      restaurantMenusId
    }
  }
`;
