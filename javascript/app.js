import { mapServices, ourCookingTeam } from "./services.js";
import { what_our_users_say, what_we_do_cards } from "./servicesList.js";

const service = document.querySelector(".what_we_do_cards");
const team = document.querySelector(".team_cards");
const content = document.querySelector(".content");
const user = document.querySelector(".what_our_users_says");
const nav = document.querySelector("nav ul");
const dropdown = document.querySelector(".dropdown");
const dropdownLine = document.querySelector(".line");

//What we do
const createServiceCard = mapServices.map((el) => {
  return `
    <div class="service">
    <img src=${el.img} loading="lazy" alt="service_${el.img}" />
    <h3>${el.title}</h3>
    <p>${el.description}</p>
    </div>`;
});
service.innerHTML = createServiceCard.join("");

// Cooking Team
const createTeamCard = ourCookingTeam.map((el) => {
  return `
  <div class="team_member">
  <div style="background-image:url(${el.img})" >
   <h3>${el.name}</h3>
   <p>${el.role}</p>
  </div>
  </div>
  `;
});

team.innerHTML = createTeamCard.join("");

// What our users say
const createsliderCard = what_our_users_say.map((el) => {
  return `
  <div class="user_comment_holder">
    <div class="user_comment_card">
        <div class="quote_top">‟</div>
          <div class="user_img">
            <img src=${el.img} loading="lazy" alt=${el.userName} />
            <h3>${el.userName}</h3>
          </div>
          <p>
          ${el.message}
          </p>
      <div class="quote_bottom">„</div>
    </div>
  </div>
  `;
});

content.innerHTML = createsliderCard.join("");

let num = 0;
document.addEventListener("click", (e) => {
  if (e.target.className === "slide_right") {
    num++;
    num < what_our_users_say.length ? num : (num = 0);
    content.style.transform = `translateX(-${100 * num}%)`;
  }
});
document.addEventListener("click", (e) => {
  if (e.target.className === "slide_left") {
    num--;
    content.style.transform = `translateX(-${100 * num}%)`;
    num <= 0 ? (num = what_our_users_say.length) : (num = num);
  }
});

let isDisplayed = false;
const handleDropdown = () => {
  isDisplayed = !isDisplayed;
  isDisplayed
    ? (dropdown.classList.add("cancle"),
      (dropdown.style.position = "fixed"),
      (nav.style.display = "flex"))
    : (dropdown.classList.remove("cancle"),
      (dropdown.style.position = "absolute"),
      (nav.style.display = "none"));
};

dropdown.addEventListener("click", handleDropdown);
dropdownLine.addEventListener("click", handleDropdown);
