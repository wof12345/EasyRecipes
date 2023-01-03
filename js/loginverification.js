let loginRegisterInvoker = document.querySelector(`.login_register_invoker`);
let userProfielPic = document.querySelector(`.user_picture`);
let currentUser = {};

let isLoggedIn = false;

let loginState = localStorage.getItem("isLoggedIn");

if (loginState !== "false") {
  isLoggedIn = true;
  currentUser = JSON.parse(localStorage.getItem("user"));
  loginRegisterInvoker.textContent = "profile";
  loginRegisterInvoker.href = "./userpage.html";
  userProfielPic.style = "display: block";
}
