import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
import * as queries from "./graphql/queries";

function buildCategoryTree(categories, parentID = null) {
  let categoryTree = [];
  categories
    .filter((category) => category.parentID === parentID)
    .forEach((category) => {
      categoryTree.push({
        id: category.id,
        name: category.name,
        subCategories: buildCategoryTree(categories, category.id),
      });
    });
  return categoryTree;
}

function constructCategoryIds(categories) {
  categories.map((cate) => {
    function recap(cat) {
      cat.categoryIds = [cat.id];
      console.log(cat);
      if (cat.subCategories.length) {
        cat.subCategories.forEach((c) => {
          cat.categoryIds.push(...recap(c));
        });
      }
      return cat.categoryIds;
    }
    cate.categoryIds = recap(cate);
    return cate;
  });
  return categories;
}
function getMenus(menus, category){
    return menus.filter(m=>(category.categoryIds.includes(menus.categoryID)))
}

const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get("id");

console.log("restaurantId");
console.log(restaurantId);
if (restaurantId) {
  (async () => {
    let restaurant = await API.graphql(
      graphqlOperation(queries.getRestaurant, { id: restaurantId })
    );
    restaurant = restaurant.data.getRestaurant;

    console.log(restaurant);
    const categories = constructCategoryIds(buildCategoryTree(restaurant.categories));

    const menus = restaurant.menus.items;
    console.log(categories, menus);
  })();
}
