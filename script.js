const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

const doMagic = (change) => {
	if (good.checked && cheap.checked && fast.checked) {
		if (good === change) {
			fast.checked = false;
		}

		if (cheap === change) {
			good.checked = false;
		}

		if (fast === change) {
			cheap.checked = false;
		}
	}
};

toggles.forEach((toggle) =>
	toggle.addEventListener('change', (e) => {
		doMagic(e.target);
	})
);
