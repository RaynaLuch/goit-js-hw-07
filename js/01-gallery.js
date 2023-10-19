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

myList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //event.stopImmediatePropagation();
  //   event.target.src = "";
  const selectedImg = event.target.attributes["data-source"].value;
  const instance = basicLightbox.create(`
    <img src=${selectedImg} width="1280">
`);

  instance.show();

  //   console.log(selectedImg);
});
