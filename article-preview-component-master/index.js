const btn = document.getElementById("share");
const show = document.getElementById("show");
btn.addEventListener("click", () => {
  if (show.style.display == "none") {
    show.className = "";
    show.style.display = "flex";
    if (window.innerWidth <= 400) {
      show.className = "mob";
    } else {
      show.className = "desk";
    }
  } else {
    show.style.display = "none";
  }
});
window.addEventListener("resize", () => {
  show.style.display = "none";
});
