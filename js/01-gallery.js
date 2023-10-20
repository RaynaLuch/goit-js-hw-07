import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const myList = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    (galleryItems) =>
      `<li class="gallery__item"><a class="gallery__link" href=${galleryItems.original} ><img class="gallery__image" src = ${galleryItems.preview} data-source=${galleryItems.original} alt = ${galleryItems.description} /> </a></li>`
  )
  .join("");
myList.insertAdjacentHTML("beforeend", markup);

let instance = basicLightbox.create("");
function escListener(event) {
  if (event.key === "Escape") {
    instance.close();
    document.removeEventListener("keydown", escListener);
  }
}
myList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const selectedImg = event.target.attributes["data-source"].value;
  instance = basicLightbox.create(`<img src=${selectedImg}>`);

  instance.show();

  document.addEventListener("keydown", escListener);
});
