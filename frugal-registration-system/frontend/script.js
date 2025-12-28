function validateForm() {

    let valid = true;

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    // Reset errors
    document.querySelectorAll(".error").forEach(e => e.innerHTML = "");

    if (firstName === "") {
        document.getElementById("firstNameError").innerHTML = "Required";
        valid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").innerHTML = "Required";
        valid = false;
    }

    if (!email.includes("@") || email.includes("tempmail")) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if (phone.length < 10) {
        document.getElementById("phoneError").innerHTML = "Invalid phone";
        valid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerHTML = "Accept terms";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        document.getElementById("regForm").reset();
    }
}
