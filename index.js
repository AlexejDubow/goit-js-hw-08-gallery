"use strict";

import galleryArray from "./gallery-items.js";

const ul = document.querySelector(".js-gallery");
ul.append(...createListTags());
ul.addEventListener("click", openModal);

const modalWrapper = document.querySelector(".js-lightbox");
const modal = document.querySelector(".lightbox__content");

modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

const imgModal = document.querySelector(".lightbox__image");

const buttonClose = document.querySelector('[data-action="close-lightbox"]');
buttonClose.addEventListener("click", closeModal);

function createListTags() {
  let listTags = galleryArray.map((item) => {
    const img = document.createElement("img");
    img.setAttribute("src", item.preview);
    img.setAttribute("data-source", item.original);
    img.setAttribute("alt", item.description);
    img.classList.add("gallery__image");

    const link = document.createElement("a");
    link.setAttribute("href", item.original);
    link.classList.add("gallery__link");

    const li = document.createElement("li");
    li.classList.add("gallery__item");

    link.append(img);
    li.append(link);

    return li;
  });
  return listTags;
}

function openModal(event) {
  if (event.target !== event.currentTarget) {
    event.preventDefault();

    modalWrapper.classList.add("is-open");
    imgModal.src = "";
    imgModal.src = event.target.dataset.source;
  }
}

function closeModal() {
  modalWrapper.classList.remove("is-open");
}
const arrOriginalLinks = galleryArray.map((el) => el.original);

/*********Method #1*********/

document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    closeModal();
  } else if (e.code == "ArrowRight") {
    nextImgSrc();
  } else if (e.code == "ArrowLeft") {
    prevImgSrc();
  }
});

function nextImgSrc() {
  const arrOriginalLinks = galleryArray.map((el) => el.original);
  const currentImageSource = arrOriginalLinks.findIndex(
    (el) => el === imgModal.src
  );
  if (currentImageSource !== arrOriginalLinks.length - 1) {
    const nextImg = arrOriginalLinks[currentImageSource + 1];
    imgModal.src = nextImg;
  }
}

function prevImgSrc() {
  const arrOriginalLinks = galleryArray.map((el) => el.original);
  const currentImageSource = arrOriginalLinks.findIndex(
    (el) => el === imgModal.src
  );
  if (currentImageSource !== 0) {
    const prevImg = arrOriginalLinks[currentImageSource - 1];
    imgModal.src = prevImg;
  }
}
