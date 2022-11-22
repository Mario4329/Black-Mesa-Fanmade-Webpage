"use strict";
// Elements
const form = document.querySelector("form");

let fname = document.getElementById("fname").value;
console.log(fname);

let lname = document.getElementById("lname").value;
let email = document.getElementById("eaddress").value;
let phone = document.getElementById("phone-num").value;
let address = document.getElementById("s-address");
let zip = document.getElementById("zip-c").value;

// getting the values from the form and storing it

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const fd = new FormData(form);

  const obj = Object.fromEntries(fd);
  console.log(obj);

  const json = JSON.stringify(obj);
  localStorage.setItem("form", json);

  window.location.href = "Confirm.html";
});
