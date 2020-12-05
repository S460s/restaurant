import { homepage } from "./homepage";
import { menu } from "./menu";
import { elementFactory } from "./elementFactory";

const domManipulation = (function () {
	const content = document.getElementById("content");
	const navBar = elementFactory("div", content, "navBar", "", "", "");
	const homeTab = elementFactory("p", navBar.name, "homeTab", "tab", "Home");
	const menuTab = elementFactory("p", navBar.name, "menuTab", "tab", "Menu");
	const contactTab = elementFactory("p", navBar.name, "contactTab", "tab", "Contacts");

	const clearPageEvent = function (e) {
		while (content.childNodes.length > 1) {
			content.removeChild(content.lastChild);
		}
		if (e.target.id === "menuTab") {
			menu.createPage();
		} else if (e.target.id === "homeTab") {
			homepage.createPage();
		}
	};

	const clearPage = function () {
		let tabs = document.querySelectorAll(".tab");
		tabs.forEach(function (tab) {
			tab.addEventListener("click", clearPageEvent);
		});
	};

	const generatePage = function () {
		navBar.displayElement();
		homeTab.displayElement();
		menuTab.displayElement();
		contactTab.displayElement();
		clearPage();
	};

	return { generatePage };
})();
domManipulation.generatePage();
homepage.createPage();
