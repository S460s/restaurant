import { elementFactory } from "./elementFactory";

const homepage = (function () {
	const content = document.getElementById("content");
	const title = elementFactory("title", "h1", content, "title", "", "TOP Restaurant");
	const img = elementFactory("picture", "img", content, "pic", "", "", "imgs/restaurant.jpg");
	const description = elementFactory(
		"desc",
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
