const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+~|}{[]?></-=";

const allChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]?></-=";

const pwbtn = document.getElementById("passwordBtn");
const inputFeild = document.getElementById("inp");
const copyBtn = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copy-msg");
const slider = document.getElementById("slider");
const sliderCount = document.getElementById("slider-length");
let sliderNumber = document.querySelector(".slider-num");

// this line means pick a random character from allChars
// const random = allChars[Math.floor(Math.random()*allChars.length)];

pwbtn.addEventListener("click", () => {
    let passLength = slider.value;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    password += randomChar;
  }
  inp.value = password;
});
copyBtn.addEventListener("click", () => {
  inputFeild.select();
  navigator.clipboard.writeText(inputFeild.value);
  copyMsg.classList.add("show");
  setTimeout(() => {
    copyMsg.classList.remove("show");
  }, 2000);
});
slider.addEventListener("input", () => {
  sliderNumber.textContent = slider.value;
});
