const elementFactory = function (name, elmnt, container, id, cls, txt, sorc) {
	const displayElement = function () {
		name = document.createElement(`${elmnt}`);
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

	return { displayElement };
};

export { elementFactory };
