const boton = document.querySelector("#boton__generar");
let canvas = document.querySelector("#tagList");

const generarUser = async () => {
   let tag = document.createElement("li");
   tag.className = "tag";
   let foto = document.createElement("img");
   foto.className = "img";
   let nombre = document.createElement("p");
   let apellido = document.createElement("p");
   let email = document.createElement("p");
   let dni = document.createElement("p");
   let celu = document.createElement("p");

  const respuesta = await fetch("https://randomuser.me/api/");
  const { results } = await respuesta.json();
  const datos = results[0];
  //console.log(datos);

  foto.src = datos.picture.medium;
  nombre.textContent = `Nombre: ${datos.name.first}`;
  apellido.textContent = `Apellido: ${datos.name.last}`;
  email.textContent = `Email: ${datos.email}`;
  dni.textContent = `Dni: ${datos.dob.date}`;
  celu.textContent = `cell: ${datos.cell}`;

  tag.appendChild(foto);
  tag.appendChild(nombre);
  tag.appendChild(apellido);
  tag.appendChild(email);
  tag.appendChild(dni);
  tag.appendChild(celu);
  canvas.append(tag);
};
boton.addEventListener("click", generarUser);
/*


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("#nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/