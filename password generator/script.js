const empty = "";

const uCase = "ABCDEFGHIJKLMNOPRSTUVXZWQ",
    lCase = "abcdefghijklmnoprstuvzxqw",
    number = "1234567890",
    symbols = "!@#$%^&*+_[]{}'';:,.-|/<>?";

const plength = document.getElementById('passwordLength'),
    upperCase = document.getElementById('passwordUpperCase'),
    lowerCase = document.getElementById('passwordLowerCase'),
    numbers = document.getElementById('passwordNumbers'),
    symbol = document.getElementById('passwordSymbols'),
    submit = document.getElementById('submit'),
    password = document.getElementById('password'),
    copyBtn = document.getElementById('copyBtn');

submit.addEventListener('click', () => {
    let initialPassword = empty;
    
    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    numbers.checked ? (initialPassword += number) : "";
    symbol.checked ? (initialPassword += symbols) : "";

    password.value = generatePassword(plength.value, initialPassword);
})

function generatePassword(length, initialPassword) {
    let pass = '';

    for (let i = 0; i < length; i++) {
        pass += initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        )
    }
    return pass
}

copyBtn.addEventListener('click', () => {
    // navigator.clipboard.writeText(password.value);
    // alert("Password copied");
    if(password.value === '') {
        alert("Please enter your password")
    } else{
        password.select()
        document.execCommand("copy");
        alert("Password copied")

    }
})