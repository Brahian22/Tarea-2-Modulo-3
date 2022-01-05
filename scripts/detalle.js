import { peliculas } from "../data/data.js";

const div= document.querySelector('div')

const fragmento=document.createDocumentFragment();

peliculas.forEach(producto  =>{

  const {name, descripcion, image } = producto;
   
    div.querySelector('h1').textContent= name
    div.querySelector('p').textContent= descripcion
    div.querySelector('img').setAttribute('src', image)
    const clone =div.cloneNode(true)
    fragmento.appendChild(clone)
})
div.appendChild(fragmento)
