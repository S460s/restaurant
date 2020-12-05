const elementFactory = function (elmnt, container, id, cls, txt, sorc) {
	const name = document.createElement(`${elmnt}`);
	const displayElement = function () {
		if (txt) {
			name.textContent = `${txt}`;
		}
		if (id) {
			name.setAttribute("id", `${id}`);
		}
		if (cls) {
			name.classList.add(`${cls}`);
		}
		if (sorc) {
			name.src = sorc;
		}
		container.appendChild(name);
	};

	return { displayElement, name };
};

export { elementFactory };
