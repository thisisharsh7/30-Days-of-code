const btn = document.querySelectorAll(".arrow");
const div = document.querySelectorAll(".first");
const apara = document.querySelectorAll(".para");
div.forEach(myFunction);
function myFunction(value) {
  const k = value.children[0];
  k.addEventListener("click", () => {
    const el = k.parentElement.children[1];
    apara.forEach((value) => {
      const m = value.nextElementSibling;
      if (m.id == el.id && el.style.display != "block") {
        el.style.display = "block";
        value.style.fontWeight = "bold";
        value.children[0].style.transform = "rotate(180deg)";
      } else {
        value.children[0].style.transform = "none";
        value.style.fontWeight = "normal";
        m.style.display = "none";
      }
    });
  });
}
