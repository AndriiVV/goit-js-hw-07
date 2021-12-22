import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
	gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", handleClick);

function handleClick(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;

	const instance = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`
	);
	instance.show();
}

createImageGallery();

function createImageGallery() {
	const newGalleryItems = galleryItems
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
      </a>
      </div>`;
		})
		.join("");

	refs.gallery.insertAdjacentHTML("afterbegin", newGalleryItems);
}
