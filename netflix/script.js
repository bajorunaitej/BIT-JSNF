const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});

const signInBtn = document.querySelector('#signin-btn');
const closeBtn = document.querySelector('#close-btn');

signInBtn.addEventListener('click', () => {
    document.querySelector('.main-page').style.display = "none";
    document.querySelector('.favDialog').style.display = "grid";
    document.querySelector('.favDialog').style.gridTemplateColumn = "1fr";
});

closeBtn.addEventListener('click', () => {
    document.querySelector('.main-page').style.display = "block";
    document.querySelector('.favDialog').style.display = "none";

})
