/* CORREGIDO: eliminado error de sintaxis ('l' sobrante antes de comentario). */
/*======================================

VOCES SIN BARRERAS

POSTS.JS

=======================================*/

const posts = [

{

id:1,

title:"¿Qué es la accesibilidad digital?",

category:"Tecnología",

date:"04 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post1.jpg",

description:"Conoce por qué la accesibilidad digital es fundamental para construir una web inclusiva.",

content:"La accesibilidad permite que cualquier persona pueda utilizar un sitio web sin importar sus capacidades."

},

{

id:2,

title:"Tecnologías de apoyo",

category:"Innovación",

date:"02 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post2.jpg",

description:"Descubre herramientas que ayudan a personas con discapacidad.",

content:"Los lectores de pantalla, teclados adaptados y asistentes de voz hacen parte de estas tecnologías."

},

{

id:3,

title:"Diseño Universal",

category:"Diseño",

date:"01 Agosto 2026",

author:"Voces Sin Barreras",

image:"assets/images/post3.jpg",

description:"Cómo crear sitios web que funcionen para todos.",

content:"Aplicar principios de diseño universal mejora la experiencia de todos los usuarios."

}

];

/*======================================

GENERAR TARJETAS

=======================================*/

const postsContainer = document.getElementById("postsContainer");

function renderPosts(list){

if(!postsContainer) return;

postsContainer.innerHTML="";

list.forEach(post=>{

postsContainer.innerHTML+=`

<div class="post-card">

<img src="${post.image}" alt="${post.title}">

<div class="post-content">

<span class="post-category">

${post.category}

</span>

<h3>${post.title}</h3>

<p>${post.description}</p>

<small>

${post.author} • ${post.date}

</small>

<br><br>

<a href="#">

Leer más →

</a>

</div>

</div>

`;

});

}

renderPosts(posts);