import { homepage } from "./homepage";

const elementFactory = function (name, elmnt, id, cls, txt) {
	const displayElement = function () {
		name = document.createElement(`${elmnt}`);
		name.textContent = `${txt}`;
		name.setAttribute("id", `${id}`);
		name.classList.add(`${cls}`);
		navBar.appendChild(name);
	};

	return { displayElement };
};

const domManipulation = (function () {
	const content = document.getElementById("content");
	const navBar = document.createElement("div");
	const homeTab = elementFactory("homeTab", "p", "homeTab", "tab", "Home");
	const menuTab = elementFactory("menuTab", "p", "menuTab", "tab", "Menu");
	const contactTab = elementFactory("contactTab", "p", "contactTab", "tab", "Contacts");

	const createNavBar = function () {
		navBar.setAttribute("id", "navBar");
		content.appendChild(navBar);
	};

	const generatePage = function () {
		createNavBar();
		homeTab.displayElement();
		menuTab.displayElement();
		contactTab.displayElement();
	};

	return { generatePage };
})();
domManipulation.generatePage();
homepage.createPage();
