const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");


form.addEventListener("submit", e => {
    if(!email.validity.valid) {
        error.classList.remove("hide");
        email.classList.add("input-error");

        e.preventDefault();
    }
});