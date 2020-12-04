const homepage = (function () {
	const content = document.getElementById("content");

	const createTitle = function () {
		const title = document.createElement("h1");
		title.setAttribute("id", "title");
		title.textContent = "TOP Restaurant";
		content.appendChild(title);
	};

	const createImg = function () {
		const img = document.createElement("img");
		img.setAttribute("id", "pic");
		img.src = "imgs/restaurant.jpg";
		content.appendChild(img);
	};

	const createDescription = function () {
		const description = document.createElement("p");
		description.setAttribute("id", "description");
		description.textContent =
			"A very nice restaurant.(I believe the title convinced you enough.)";

		content.appendChild(description);
	};

	const createPage = function () {
		createTitle();
		createImg();
		createDescription();
	};

	return { createPage };
})();

export { homepage };
