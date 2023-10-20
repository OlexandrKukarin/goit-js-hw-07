import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
let instance;
let largeImageUrl;

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join(" ");
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handlerClick);
gallery.addEventListener("keydown", closeModal);
// const closeM = document.querySelector(".gallery__item");
// closeM.addEventListener("keydown", closeModal);
function closeModal(e) {
  if (e.key === `Escape` && instance) {
    instance.close();
  }
  // console.log(e.code);
}

function handlerClick(e) {
  e.preventDefault();
  largeImageUrl = e.target.parentNode.href;
  if (e.target === e.currentTarget) {
    return;
  }

  instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
`);

  instance.show();
}
