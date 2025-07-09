const overlay = document.querySelector("#overlay");
const details = document.querySelectorAll("details");

overlay.addEventListener("click", () => {
  document.body.classList.remove("menu-active");
  details.forEach((detail) => detail.removeAttribute("open"));
});

document.addEventListener("click", (e) => {
  const clickedInDetails = e.target.closest("details");
  if (!clickedInDetails) {
    details.forEach((detail) => detail.removeAttribute("open"));
    return;
  }
  details.forEach((d) => d !== clickedInDetails && d.removeAttribute("open"));
});
