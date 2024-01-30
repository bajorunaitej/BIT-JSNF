const usernameInput = document.querySelector('#username');
const birthDateInput = document.querySelector('#birth-date');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const profilePhoto = document.querySelector('#profile-photo');
const registerBtn = document.querySelector('#registration');

//Profile picture
profilePhoto.addEventListener('change', (event) => {
    let file = event.target.files[0];
    let fileType = file.type;
    let validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp"];

    if(!validImageTypes.includes(fileType)) {
        alert("Please select an image type file!");
        event.target.value = ""; //Reset the input
    }
});

registerBtn.onclick = async() => {
    const data = new FormData();
    data.append('username', usernameInput.value);
    data.append('birthDate', birthDateInput.value);
    data.append('password', passwordInput.value);
    data.append('email', emailInput.value);
    data.append('img', profilePhoto.files[0]);

    const promise = await fetch("http://localhost:3000/api/user/register", {
        method: "post",
        body: data
    });

    const response = await promise.json();
    console.log(response);
};