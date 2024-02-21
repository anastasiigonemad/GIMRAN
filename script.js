// картинка-кнопка для открытия модального окна
const diplom1 = document.querySelector(".diplom-img1");
const diplom2 = document.querySelector(".diplom-img2");
const diplom3 = document.querySelector(".diplom-img3");
const diplom4 = document.querySelector(".diplom-img4");
const diplom5 = document.querySelector(".diplom-img5");
const diplom6 = document.querySelector(".diplom-img6");
const diplom7 = document.querySelector(".diplom-img7");
const diplom8 = document.querySelector(".diplom-img8");
const diplom9 = document.querySelector(".diplom-img9");
const diplom10 = document.querySelector(".diplom-img10");
const diplom11 = document.querySelector(".diplom-img11");
// модальные окна
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal3 = document.querySelector(".modal-3");
const modal4 = document.querySelector(".modal-4");
const modal5 = document.querySelector(".modal-5");
const modal6 = document.querySelector(".modal-6");
const modal7 = document.querySelector(".modal-7");
const modal8 = document.querySelector(".modal-8");
const modal9 = document.querySelector(".modal-9");
const modal10 = document.querySelector(".modal-10");
const modal11 = document.querySelector(".modal-11");
// закрывающая кнопка
const closeBtn1 = document.querySelector(".close-modal-1");
const closeBtn2 = document.querySelector(".close-modal-2");
const closeBtn3 = document.querySelector(".close-modal-3");
const closeBtn4 = document.querySelector(".close-modal-4");
const closeBtn5 = document.querySelector(".close-modal-5");
const closeBtn6 = document.querySelector(".close-modal-6");
const closeBtn7 = document.querySelector(".close-modal-7");
const closeBtn8 = document.querySelector(".close-modal-8");
const closeBtn9 = document.querySelector(".close-modal-9");
const closeBtn10 = document.querySelector(".close-modal-10");
const closeBtn11 = document.querySelector(".close-modal-11");

const diplomItems = [
  diplom1,
  diplom2,
  diplom3,
  diplom4,
  diplom5,
  diplom6,
  diplom7,
  diplom8,
  diplom9,
  diplom10,
  diplom11,
];

const modalItems = [
  modal1,
  modal2,
  modal3,
  modal4,
  modal5,
  modal6,
  modal7,
  modal8,
  modal9,
  modal10,
  modal11,
];

const closeBtnItems = [
  closeBtn1,
  closeBtn2,
  closeBtn3,
  closeBtn4,
  closeBtn5,
  closeBtn6,
  closeBtn7,
  closeBtn8,
  closeBtn9,
  closeBtn10,
  closeBtn11,
];

// Добавляем обработчики событий для каждого элемента
for (let i = 0; i < diplomItems.length; i++) {
  diplomItems[i].addEventListener("click", () => {
    modalItems[i].classList.toggle("hidden");
  });
}

for (let i = 0; i < closeBtnItems.length; i++) {
  closeBtnItems[i].addEventListener("click", () => {
    modalItems[i].classList.toggle("hidden");
  });
}
