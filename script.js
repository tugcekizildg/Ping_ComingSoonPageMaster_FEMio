document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const formControl = document.querySelector(".form-control");
    const errorMessage = formControl.querySelector("small");


    //Email validation regex
    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission
        validateEmail();
    });

    email.addEventListener("blur", () => {
        validateEmail(); // Validate when clicking outside the input
    });

    function validateEmail() {
        const emailValue = email.value.trim();

        if (emailValue === "") {
            showError("Whoops! It looks like you forgot to add your email");
        } else if (!isValidEmail(emailValue)) {
            showError("Please provide a valid email address");
        } else {
            clearError();
        }
    }

    function showError(message) {
        formControl.classList.add("error");
        email.style.borderColor = "hsl(354, 100%, 66%)";
        errorMessage.textContent = message;
        errorMessage.style.visibility = "visible";
    }

    function clearError() {
        formControl.classList.remove("error");
        email.style.borderColor = "hsl(223, 100%, 88%)";
        errorMessage.style.visibility = "hidden";
    }

    // Reload page when clicking anywhere **except** the form elements
    document.addEventListener("click", (event) => {
        if (!form.contains(event.target)) {
            location.reload();
        }
    });
});
