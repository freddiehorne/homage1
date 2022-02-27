const burgerBtn = document.querySelector(".burger");
const menuMove = document.querySelector(".dropdown-container");
const burgerLine = document.querySelector(".burger");
const siteDropdown = document.querySelector(".sites-down");
burgerBtn.addEventListener("click", () => {
	menuMove.classList.toggle("menu-slide");
	burgerLine.classList.toggle("animate");
});

siteDropdown.addEventListener("click", () => {
	siteDropdown.classList.toggle("sites-drop");
});
