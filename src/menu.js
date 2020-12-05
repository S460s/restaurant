import { elementFactory } from "./elementFactory";

const content = document.getElementById("content");
const foodFactory = function (sorc, name, desc) {
	const foodCard = elementFactory("div", content, "card");
	const foodName = elementFactory("h3", foodCard.name, "foodTitle", "", name);
	const pic = elementFactory("img", foodCard.name, "foodPic", "", "", sorc);
	const description = elementFactory("p", foodCard.name, "foodDesc", "", desc);

	const displayCard = function () {
		foodCard.displayElement();
		pic.displayElement();
		foodName.displayElement();
		description.displayElement();
	};

	return { displayCard };
};

const menu = (function () {
	let musaka = foodFactory(
		"imgs/musaka.jpg",
		"Musaka",
		"This dish is enjoyed in many variations throughout the Balkan region. The Bulgarian version involves potatoes, eggs and minced pork meat "
	);

	let shopskaSalata = foodFactory(
		"imgs/shopskaSalata.jpg",
		"Shopska Salata",
		"Bulgaria’s internationally-renowned salad is a simple — but effective — combo of diced tomatoes, cucumbers, onions and peppers, with grated cheese and parsley on top."
	);

	let lukanka = foodFactory(
		"imgs/lukanka.jpg",
		"Lukanka",
		"Lukanka is a flavourful semi-dried sausage with a flattened shape."
	);

	const createPage = function () {
		musaka.displayCard();
		shopskaSalata.displayCard();
		lukanka.displayCard();
	};

	return { createPage };
})();

export { menu };
