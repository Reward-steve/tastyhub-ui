import { mapServices, ourCookingTeam } from "./services.js";
import { what_our_users_say, what_we_do_cards } from "./servicesList.js";

const service = document.querySelector(".what_we_do_cards");
const team = document.querySelector(".team_cards");
const users = document.querySelector(".what_our_users_says");

//What we do
const createServiceCard = mapServices.map((el) => {
  return `
    <div class="service">
    <img src=${el.img} alt="service_${el.img}" />
    <h3>${el.title}</h3>
    <p>${el.description}</p>
    </div>`;
});
service.innerHTML = createServiceCard.join("");

// Cooking Team
const createTeamCard = ourCookingTeam.map((el) => {
  return `
  <div class="team_member">
  <div style="background-image:url(${el.img})" ></div>
  <h3>${el.name}</h3>
  <p>${el.role}</p>
  </div>
  `;
});

team.innerHTML = createTeamCard.join("");

// What our users say
const createsliderCard = what_our_users_say.map((el) => {
  return `
<div class="content">
        <div class="user_comment_card">
          <div class="quote_top">‟</div>

          <div class="user_img">
            <img src=${el.img} alt=${el.userName} />
          </div>
          <h3>${el.userName}</h3>
          <p>
          ${el.message}
          </p>

          <div class="quote_bottom">„</div>
        </div>
      </div> 
  `;
});

users.innerHTML = `
<div class="slide_left">←</div>
${createsliderCard.join("")}     
<div class="slide_right">→</div>`;
