import { mapServices, ourCookingTeam } from "./services.js";
const service = document.querySelector(".what_we_do_cards");
const team = document.querySelector(".team_cards");

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
