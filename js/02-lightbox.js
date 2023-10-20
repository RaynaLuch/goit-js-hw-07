import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const myList = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item"><a class="gallery__link" href=${galleryItems.original} ><img class="gallery__image" src = ${galleryItems.preview} alt = ${galleryItems.description} /> </a></li>`
  )
  .join("");
myList.insertAdjacentHTML("beforeend", markup);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
