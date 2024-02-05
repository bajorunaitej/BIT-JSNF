const header = document.querySelector('.header');

window.addEventListener("scroll", function() {
    if(window.scrollY > 100) {
        header.style.backgroundColor = "#16151721";
    } else {
        header.style.backgroundColor = "#16151730";
    }
});
function destroyEvent(event) {
	event.target.remove();
}