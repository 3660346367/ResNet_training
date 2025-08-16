
document
  .getElementById("telLogin")
  .addEventListener("click", function () {
    document.querySelector(".tel-login").classList.remove("hidden");
    document.querySelector(".login-pssw").classList.add("hidden");
    this.classList.add("selected");
    document.getElementById("loginpassword").classList.remove("selected");
  });

document
  .getElementById("loginpassword")
  .addEventListener("click", function () {
    document.querySelector(".login-pssw").classList.remove("hidden");
    document.querySelector(".tel-login").classList.add("hidden");
    this.classList.add("selected");
    document.getElementById("telLogin").classList.remove("selected");
  });