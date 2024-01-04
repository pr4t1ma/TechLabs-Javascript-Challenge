const inputName = document.getElementById("name");
const form = document.getElementById("form");
const phoneInput = document.getElementById("number");
const email = document.getElementById("email");
const passInput = document.getElementById("password");
const vldMsg = document.querySelector(".vldmsg");
const vldInput = document.querySelector(".vldinput");
const savePass = document.querySelector(".save");
const submitBtn = document.getElementById("btn");
const submitMsg = document.querySelector(".submsg");

function validateNumber() {
  const phoneNum = phoneInput.value;
  if ((phoneNum.length > 10) & !isNaN(phoneNum)) {
    vldMsg.textContent = "Phone number is correct";
    vldInput.style.border = "";
    vldInput.setAttribute("class", "success");
  } else {
    vldInput.setAttribute("class", "error");
    vldMsg.textContent = "Phone number is not correct";
  }
}

phoneInput.addEventListener("change", (e) => {
  validateNumber();
});

function validatePassword() {
  if (passInput.value.length > 6) {
    savePass.textContent = "";
    passInput.setAttribute("class", "success");
  } else {
    savePass.textContent = "Your password must be longer than 6 characters";
    passInput.setAttribute("class", "error");
  }
}

passInput.addEventListener("change", (e) => {
  validatePassword();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitMsg.textContent = "Your form is being validated.";

  validatePassword();
  validateNumber();
});
