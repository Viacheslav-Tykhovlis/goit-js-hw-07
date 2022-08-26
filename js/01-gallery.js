import { galleryItems } from "./gallery-items.js";
// Change code below this line

const blokGallery = document.querySelector(".gallery");
blokGallery.innerHTML = createElements(galleryItems);
blokGallery.addEventListener("click", openModal);

function openModal(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  evt.preventDefault();
  const originalImage = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="854">
`);
  originalImage.show();
  window.addEventListener("keydown", closeModal);

  function closeModal(evt) {
    if (evt.code === "Escape") {
      originalImage.close();
      window.removeEventListener("keydown", closeModal);
    }
  }
}

function createElements(gallery) {
  const imageElements = gallery
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>`
    )
    .join("");
  return imageElements;
}
