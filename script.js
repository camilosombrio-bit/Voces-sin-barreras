document.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Gracias por contactarnos. Tu mensaje ha sido enviado."
);

this.reset();

});