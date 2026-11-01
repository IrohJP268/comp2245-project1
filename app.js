const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const frequencyField = document.querySelector("#frequency");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const frequencyError = document.querySelector("#frequency-error");
const formMessage = document.querySelector("#form-message");


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.textContent = "";
    formMessage.classList.remove("success");

    
    nameError.textContent = "";
    emailError.textContent = "";
    frequencyError.textContent = "";

    nameField.removeAttribute("aria-invalid");
    emailField.removeAttribute("aria-invalid");
    frequencyField.removeAttribute("aria-invalid");

    
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const frequency = frequencyField.value.trim();

    let firstInvalidField = null;

    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameField.setAttribute("aria-invalid", "true");
        firstInvalidField = nameField;
    }


    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailField.setAttribute("aria-invalid", "true");

        if (firstInvalidField === null) {
            firstInvalidField = emailField;
        }
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailField.setAttribute("aria-invalid", "true");

        if (firstInvalidField === null) {
            firstInvalidField = emailField;
        }
    }

    
    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyField.setAttribute("aria-invalid", "true");

        if (firstInvalidField === null) {
            firstInvalidField = frequencyField;
        }
    }


    if (firstInvalidField !== null) {
        firstInvalidField.focus();
        return;
    }

    
    formMessage.textContent =
        "Thank you, " + name + "! You're on the mailing list.";
    formMessage.classList.add("success");


    form.reset();
});
