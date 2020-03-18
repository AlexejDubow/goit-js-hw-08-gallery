"use strict";

import galleryArray from "./gallery-items.js";

const ul = document.querySelector(".js-gallery");

const img = galleryArray.map((item) => {
  let images = document.createElement("img");
  images.setAttribute("src", item.preview);
  images.setAttribute("data-source", item.original);
  images.setAttribute("alt", item.description);
  images.classList.add("gallery__image");
  return images;
});

const a = img.map((item) => {
  let a = document.createElement("a");
  a.setAttribute("href", item.original);
  a.classList.add("gallery__link");
  a.append(item);
  return a;
});

const li = a.map((item) => {
  let list = document.createElement("li");
  list.classList.add("gallery__item");
  list.append(item);
  return list;
});

ul.append(...li);

ul.addEventListener("click", openModal);

function openModal(event) {
  if (event.target == event.currentTarget) {
    return;
  }
  event.preventDefault();

  const divModal = document.querySelector(".js-lightbox");
  divModal.classList.add("is-open");
  const imgModal = document.querySelector(".lightbox__image");
  imgModal.src = "";
  imgModal.src = event.target.dataset.source;
}

const buttonClose = document.querySelector('[data-action="close-lightbox"]');
buttonClose.addEventListener("click", closeModal);
const overlay = document.querySelector(".lightbox__overlay");
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    closeModal();
  }
  if (e.code == "ArrowRight") {
    // console.log("ArrowRight")
    // const imgModal = document.querySelector(".lightbox__image");

    // console.dir(imgModal);
  }
  if (e.code == "ArrowLeft") {
    // console.log("ArrowLeft")
  }
});

function closeModal() {
  const divModal = document.querySelector(".js-lightbox");
  divModal.classList.remove("is-open");
}
