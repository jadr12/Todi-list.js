var span = document.querySelectorAll("span");

let btn = document.querySelector('.btn');


btn.addEventListener('click',bouton)

function bouton(){
    var x = document.getElementById('formulaire').value
    span[0].innerText=x
    document.getElementById('formulaire').value=""
}