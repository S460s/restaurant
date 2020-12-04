import { homepage } from "./homepage";

const domManipulation = (function () {
	const content = document.getElementById("content");
	const navBar = document.createElement("div");

	const createNavBar = function () {
		navBar.setAttribute("id", "navBar");
		content.appendChild(navBar);
	};

	const createHomeTab = function () {
		const homeTab = document.createElement("p");
		homeTab.textContent = "Home";
		homeTab.setAttribute("id", "homeTab");
		homeTab.classList.add("tab");
		navBar.appendChild(homeTab);
	};

	const createMenuTab = function () {
		const menuTab = document.createElement("p");
		menuTab.textContent = "Menu";
		menuTab.setAttribute("id", "menuTab");
		menuTab.classList.add("tab");
		navBar.appendChild(menuTab);
	};

	const createContactTab = function () {
		const contactTab = document.createElement("p");
		contactTab.textContent = "Contacts";
		contactTab.setAttribute("id", "homeTab");
		contactTab.classList.add("tab");
		navBar.appendChild(contactTab);
	};

	const generatePage = function () {
		createNavBar();
		createHomeTab();
		createMenuTab();
		createContactTab();
	};

	return { generatePage };
})();
domManipulation.generatePage();
homepage.createPage();
