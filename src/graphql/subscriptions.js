/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onCreateMenu(filter: $filter) {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
    onUpdateMenu(filter: $filter) {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
    onDeleteMenu(filter: $filter) {
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
