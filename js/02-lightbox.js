import { galleryItems } from "./gallery-items.js";
// Change code below this line

const blokGallery = document.querySelector(".gallery");
blokGallery.innerHTML = createElements(galleryItems);

function createElements(gallery) {
  const imageElements = gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`
    )
    .join("");
  return imageElements;
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
