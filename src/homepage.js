import { elementFactory } from "./elementFactory";

const homepage = (function () {
	const content = document.getElementById("content");
	const title = elementFactory("h1", content, "title", "", "TOP Restaurant");
	const img = elementFactory("img", content, "pic", "", "", "imgs/restaurant.jpg");
	const description = elementFactory(
		"p",
		content,
		"description",
		"",
		"The best restaurant.(I believe the title convinced you enough.)"
	);

	const createPage = function () {
		title.displayElement();
		img.displayElement();
		description.displayElement();
	};
	return { createPage };
})();

export { homepage };
