
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const submitInput = document.getElementById("form");
const resultInput = document.getElementById("form");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmError = document.getElementById("confirmPasswordError")

function showError(el, message) {
  el.innerHTML = message;
}

// Function to Clear Error
function clearError(el) {
  el.innerHTML = "";
}

function validateName(){
    let value =  nameInput.value.trim();
    if(value.length <2){
        showError(nameError, "Name must be atleast 2 character.");
        return false;
    }
    clearError(nameError);
    return true;

}

function validateForm(){
    let okName = validateName();
    return okName;
}

function validateEmail(){
    let value = emailInput.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]$/.test(value)){
        showError(emailError,"Enter Valid Email Address");
        return false;
    }
    clearError(emailError);
    return true;
}

function validatePassword(){
    let value = passwordInput.value.trim();
    if(value.length<8){
        showError(passwordError, "Password must be atleast 8 characters");
        return false;
    }
    clearError(passwordError);
    return true;
}

function validateConfirm(){
    let pass = passwordInput.value.trim();
    let confirm = confirmInput.value.trim();
    if(confirm==""){
        showError(confirmError,"Please Confirm Password");
        return false;
    }
    if(confirm!==pass){
        showError(confirmError,"Password did not Match");
        return false;
    }

    clearError(confirmError);
    return true;

}

function validateForm(){
    let okName = validateName();
    let okEmail = validateEmail();
    let okPass = validatePassword();
    let okConfrim = validateConfirm();
    return okNam && okEmail && okPass && okConfrim;
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    result.innerHTML ="";

    if(validateForm()){
        result.innerHTML ="Form is valid";
        result.className = "ok";
    }else{
        result.innerHTML = "Please fix the errors.";
        result.className = "error";
    }
});