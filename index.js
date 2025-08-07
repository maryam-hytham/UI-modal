// variables
const open_btn = document.querySelector(".btn-open");
const close_btn = document.querySelector(".btn-close");
const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");

// event listeners
open_btn.addEventListener("click", function () {
  modal.style.display = "flex";
  overlay.style.display = "block";
});

close_btn.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", function () {
  modal.style.display = "none";
  overlay.style.display = "none";
});
