import { discover_our_menu, favourite_list } from "./data.js";

const menuList = document.getElementById("menuList");
const favList = document.getElementById("fav_list");
//Menu List
const createMenuList = discover_our_menu.map((el) => {
  return `<li>🔸<span style="color: orange">${el.title}</span> ${el.listContent}</li>`;
});

menuList.innerHTML = createMenuList.join("");

//Favourite List
const createFavouriteList = favourite_list.map((el) => {
  return `<div class="customer_fav_card">
            <div class="img_holder">
               <img src="${el.img}" alt="" />
             </div>
             <p>${el.context}</p>
          </div>`;
});
favList.innerHTML = createFavouriteList.join("");
