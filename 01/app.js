const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});
