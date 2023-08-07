import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery')



function creatCard(arr) {
    return arr.map(({ preview, original, description }) => 
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
    ).join('')
}

gallery.insertAdjacentHTML('beforeend', creatCard(galleryItems))

gallery.addEventListener('click', handleCardClick)

function handleCardClick(evt) {
    evt.preventDefault();
window.addEventListener('keydown', onEscPress)
    if (evt.target === evt.currentTarget) {
    return
    }
    
   
    const currentCard = evt.target.dataset.source;
    console.log(currentCard)
    const instance = basicLightbox.create(`<img src="${currentCard}" />`)
instance.show()

   
    function onEscPress() {
    instance.close()
}
 
}






console.log(galleryItems);
