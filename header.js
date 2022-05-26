const gnbBar = document.querySelector(".gnb-list");
const login = document.querySelector(".util-login");
const slogan = document.querySelector(".slogan1");
const loginBanner = document.querySelector(".login-banner");
const CLASS_NANE = "active";
const HIDDEN = "hidden";

gnbBar.addEventListener("mouseenter", () => {
  gnbBar.classList.add(CLASS_NANE);
});
gnbBar.addEventListener("mouseleave", () => {
  gnbBar.classList.remove(CLASS_NANE);
});
login.addEventListener("mouseenter", () => {
  login.classList.add(CLASS_NANE);
  loginBanner.classList.remove(HIDDEN);
});
login.addEventListener("mouseleave", () => {
  login.classList.remove(CLASS_NANE);
  loginBanner.classList.add(HIDDEN);
});
slogan.addEventListener("mouseenter", () => {
  slogan.classList.add(CLASS_NANE);
});
slogan.addEventListener("mouseleave", () => {
  slogan.classList.remove(CLASS_NANE);
});
