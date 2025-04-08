//Review Carosel
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

//Hamburger dropdown
let isDisplayed = false;
const handleDropdown = () => {
  isDisplayed = !isDisplayed;
  isDisplayed
    ? (dropdown.classList.add("cancle"),
      (dropdown.style.position = "fixed"),
      (nav.style.opacity = "1"),
      (nav.style.height = "100vh"))
    : (dropdown.classList.remove("cancle"),
      (dropdown.style.position = "absolute"),
      (nav.style.opacity = "0"),
      (nav.style.height = "0"));
};
