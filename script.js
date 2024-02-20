const diplomItems = document.querySelectorAll(".diplom-img");

for (let value of diplomItems) {
  value.addEventListener("click", () => {
    value.classList.toggle("diplom-active");
  });
}
