
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.getElementById("year").textContent = new Date().getFullYear();
