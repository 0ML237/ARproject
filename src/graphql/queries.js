/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        adresse
        email
        localisation
        contact
        menus {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        category {
          name
        }
        createdAt
        updatedAt
        restaurantMenusId
      }
      nextToken
    }
  }
`;
