import { elementFactory } from "./elementFactory";

const menu = (function () {
	const content = document.getElementById("content");
	const title = elementFactory("h1", content, "title", "", "Menu");
	const musakaPic = elementFactory("img", content, "pic", "", "", "imgs/musaka.jpg");

	const createPage = function () {
		title.displayElement();
		musakaPic.displayElement();
	};

	return { createPage };
})();

export { menu };
