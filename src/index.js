import { homepage } from "./homepage";
import { elementFactory } from "./elementFactory";

const domManipulation = (function () {
	const content = document.getElementById("content");
	const navBar = document.createElement("div");
	const homeTab = elementFactory("homeTab", "p", navBar, "homeTab", "tab", "Home");
	const menuTab = elementFactory("menuTab", "p", navBar, "menuTab", "tab", "Menu");
	const contactTab = elementFactory("contactTab", "p", navBar, "contactTab", "tab", "Contacts");

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
