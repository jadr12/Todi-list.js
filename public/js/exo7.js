// EXO 7

let btnOK = document.querySelector('.ok');

btnOK.addEventListener('click', bouton); 


function bouton() {
   var nom = document.getElementById("titre").value;
   let taches = document.createElement("div");
   taches.innerText = nom;
   document.querySelector('.liste').appendChild(taches);
   document.getElementById("titre").value = "";
}