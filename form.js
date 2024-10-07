// GET VALUES

const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const phoneNumber = document.getElementById("phoneNumber");
const Password = document.getElementById("Password");
const Confirm = document.getElementById("Confirm");

// const emailRegex = /^[^\s@] +@[^\s@]+\.[^\s@]+$/;
// DECLEARING VARIABLE AND GETING ERRORELEMENT
// CLEAR THE PREVIOUS  ERROR MESSAGES

const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const emailError = document.getElementById("errorEmailName");
const errorPhoneNumber = document.getElementById("errorPhoneNumber");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");

function submit(event) {
  alert("Welldone");
  event.preventDefault();
  // VALIDATION**LOOPING

  // FIRSTNAME VALIDATION
  if (FirstName.value === "") {
    errorFirstName.innerHTML = "First name is required.";
    errorFirstName.style.color = "red";
    // console.log(" First name is reqired");
  } else {
    errorFirstName.innerHTML = "✅";
  }

  // LAST NAMEVALIDATION
  if (LastName.value == 0 || LastName.value == "") {
    errorLastName.innerHTML = "Last name is required.";
    errorLastName.style.color = "red";
  } else {
    errorLastName.innerHTML = "✅";
    errorLastName.style.color = "green";
  }

  // Email VALIDATION
  if (Email.value == 0 || Email.value == "") {
    emailError.innerHTML = "Email name is required.";
    emailError.style.color = "red";
  } else if (!Email.value.includes("@") || Email.value == 0) {
    emailError.innerHTML = "invalid Email Formart";
    emailError.style.color = "red";
  } else {
    emailError.innerHTML = "✅";
  }

  // PASSWORD VALIDATION
  if (Password.value == 0 || Password.value == "") {
    errorPassword.innerHTML = "Password is required.";
    errorPassword.style.color = "red";
  } else {
    errorPassword.innerHTML = "✅";
  }

  // CONFIRM PASSWORD VALIDATION
  if (Confirm.value !== Password.value || Confirm.value == "") {
    errorConfirmPassword.innerHTML = "Passwords do not Match";
    errorConfirmPassword.style.color = "red";
  } else {
    errorConfirmPassword.innerHTML = "✅";
  }
  // PHONE NUMBER VALIDATION
  if (phoneNumber.value == "" || phoneNumber.value == 0) {
    errorPhoneNumber.innerHTML = " Phone Number is required!";
    errorPhoneNumber.style.color = "red";
  } else if (
    phoneNumber.value.length !== 11 ||
    (!phoneNumber.value.startsWith("080") &&
      !phoneNumber.value.startsWith("081") &&
      !phoneNumber.value.startsWith("090") &&
      !phoneNumber.value.startsWith("091"))
  ) {
    errorPhoneNumber.innerHTML =
      "Incorrect Phone Number Format. Most be of 11 digits";
  } else {
    errorPhoneNumber.innerHTML = "✅";
  }
}
