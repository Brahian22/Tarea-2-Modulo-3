import { peliculas } from "../data/data.js";

let contenedorCard = document.querySelector(".contenedor-card");
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let botoninfo = document.getElementById('btninfo')
let contenedor = document.getElementById('contenedor');

peliculas.forEach((produc) => {
  const { name, image, id } = produc;
  templateCard.querySelector('h5').textContent = name;
  templateCard.querySelector('img').setAttribute('src', image);
  templateCard.querySelector('button').setAttribute('id', id)
  const otraTarjeta = templateCard.cloneNode(true);
  fragment.appendChild(otraTarjeta);

});
items.appendChild(fragment)




items.addEventListener('click', (e) => {
  console.log(e)
  if (e.target.classList.contains('btn')) {

    let idPel = e.srcElement.id;

    peliculas.forEach(item => {
      const { id, image, name, descripcion, } = item;

      if (idPel == id) {
        contenedor.innerHTML = `
                 <div class="modal-header card">
                 <h5 class="modal-title title" id="exampleModalLabel">${name}</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div class="modal-body">
                 <center>
                     <img class="tam" src="${image}" alt="">
                 </center> 
                 <br>
                 <p><b>Sinopsis:</b> ${descripcion}</p>
             </div>
                 `
      }
    })

  }
})


