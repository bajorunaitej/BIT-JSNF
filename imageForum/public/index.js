const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		header.style.backgroundColor = "#bd5f1f";
	} else {
		header.style.backgroundColor = "#bd5f1f02";
	}
});

function destroyEvent(event) {
	event.target.remove();
};