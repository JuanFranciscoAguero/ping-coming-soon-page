const form = document.querySelector('.main-page_form');
const emailInput = document.querySelector('.main-email');
const errorSpan = document.querySelector('.error');

form.addEventListener('submit', function(e) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let value = emailInput.value;
    if (re.test(value)) {
        emailInput.style.borderColor = "green";
        alert("Email sent!!!");
    } else {
        emailInput.style.borderColor = "red";
        errorSpan.style.display = "block";
    }
    e.preventDefault();
});