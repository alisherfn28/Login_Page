const userLogin = document.querySelector("#userName");
const userPasword = document.querySelector("#Password");
const button = document.querySelector("#btn");
const logInPage = document.querySelector(".LOGIN");
const danger = document.querySelector("#danger");
const realPage = document.querySelector("#real-page");

const correctUsername = "admin";
const correctPassword = "123456";

danger.style.display = "none";
realPage.style.display = "none";

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      userLogin.value === correctUsername &&
      userPasword.value === correctPassword
    ) {
      logInPage.style.display = "none";
      realPage.style.display = "block";
      danger.style.display = "none";
    } else {
      userLogin.focus();
      danger.style.display = "block";
    }

    userLogin.value = "";
    userPasword.value = "";
  });
