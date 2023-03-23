import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import * as queries from "./graphql/queries";

//Requette de récupération des menus

// const getMenuItems = async function () {
//     const allMenus = await API.graphql({ query: queries.listMenus});
//     return Promise.resolve(allMenus.data.listMenus.items);
//     const allMenusByCategory = await API.graphql({ query: queries.listMenus});
//     const allMenusBySubCategory = await API.graphql({ query: queries.listMenus});
//     // console.log("allMenus");
//     console.log(allMenusByCategory);
//     console.log(allMenusBySubCategory);
//     // console.log(allMenus.data.listMenus.items);
//     // console.log("allMenus");
// }

(async ()=>{
    const allMenusByCategory = await API.graphql({ query: queries.listMenus});
    const allMenusBySubCategory = await API.graphql({ query: queries.listMenus});
    console.log('allMenusByCategory');
    console.log(allMenusByCategory);
    console.log('allMenusBySubCategory');
    console.log(allMenusBySubCategory);
})()