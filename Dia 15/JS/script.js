
const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const cumpleaños = document.querySelector('#cumpleaños');
const direccion = document.querySelector('#direccion');
const telefono = document.querySelector('#telefono');
const contraseña = document.querySelector('#contraseña');
const foto = document.querySelector('#foto');

const generarUsuario = async () => {

    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    cumpleaños.textContent = datos.dob.date;
    direccion.textContent = datos.location.street.number.name;
    telefono.textContent = datos.phone;
    contraseña.textContent = datos.password;
}


document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);