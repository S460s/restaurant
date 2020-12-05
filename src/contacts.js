import { elementFactory } from "./elementFactory";

const contacts = (function () {
	const content = document.getElementById("content");
	let contactTitle = elementFactory("h1", content, "title", "", "Contact Us");
	let email = elementFactory("p", content, "email", "", "Email: mehanata@gmail.com");
	let phone = elementFactory("p", content, "phone", "", "Mobile: +359 2213 7182");

	const createPage = function () {
		contactTitle.displayElement();
		email.displayElement();
		phone.displayElement();
	};

	return { createPage };
})();

export { contacts };
