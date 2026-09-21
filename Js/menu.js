/* CORREGIDO: validaciones para evitar errores si faltan elementos del DOM. */
/*======================================

VOCES SIN BARRERAS

MENU.JS

=======================================*/

//==============================
//
// ELEMENTOS
//
//==============================

const menu = document.querySelector(".menu");

const menuButton = document.getElementById("menuButton");

const header = document.querySelector("header");

//==============================
//
// MENÚ RESPONSIVE
//
//==============================

if(menuButton){

menuButton.addEventListener("click",()=>{

if(menu) menu.classList.toggle("active");

});

}

//==============================
//
// CERRAR MENÚ
//
//==============================

document.querySelectorAll(".menu a")

.forEach(link=>{

link.addEventListener("click",()=>{

if(menu) menu.classList.remove("active");

});

});

//==============================
//
// HEADER AL HACER SCROLL
//
//==============================

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

if(header) header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

}

else{

if(header) header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});