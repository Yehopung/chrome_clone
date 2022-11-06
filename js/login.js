const loginForm = document.querySelector("#login-form");
const loginInqut = document.querySelector("input[type='text']");
const greetingText = document.querySelector("h2");

function loginSubmitHandler(event) {
  event.preventDefault();
  userName = loginInqut.value;
  localStorage.setItem("username", userName);
  greetingText.classList.remove("hidden");
  loginForm.classList.add("hidden");
  greetingText.innerText = "Hello, " + localStorage.getItem("username");
}

if (localStorage.getItem("username") === null) {
  loginForm.classList.remove("hidden");
  greetingText.classList.add("hidden");
  loginForm.addEventListener("submit", loginSubmitHandler);
} else {
  greetingText.innerText = "Hello, " + localStorage.getItem("username");
  greetingText.classList.remove("hidden");
  loginForm.classList.add("hidden");
  loginForm.classList.add("hidden");
}
