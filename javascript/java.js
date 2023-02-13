document.getElementById("submit-button").addEventListener("click", function () {
  const inputFieldEmail = document.getElementById("email-input");
  const inputFieldEmailValue = inputFieldEmail.value;
  const inputFieldPassword = document.getElementById("password-input");
  const inputFieldPasswordValue = inputFieldPassword.value;
  if (
    inputFieldEmailValue === "amarname@gmail.com" &&
    inputFieldPasswordValue === "tariqul"
  ) {
    window.location.href = "/javascript/bank.html";
  } else {
    alert("Please insert valid information");
  }
});
