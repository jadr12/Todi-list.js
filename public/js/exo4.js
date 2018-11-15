function changeParent(){
    let verifier = document.querySelector(".compteur div");
    let carre = document.querySelector(".carre");

    if (verifier == null){
        document.querySelector('.compteur').appendChild(carre)
    }else{
        document.querySelector('.compteur1').appendChild(carre)
    }
}

let change = document.querySelector(".btn1")
change.addEventListener('click',changeParent)

// compteur

let comptage = 0

function chahid (){
    comptage++
    document.querySelector('.nombre').textContent=" "+comptage

}

let compte=document.querySelector('.btn1')
compte.addEventListener('click',chahid)

// Reset

function Reset(){
    comptage=0
    document.querySelector('.nombre').textContent="0";
}

let reset = document.querySelector('.btn2')
reset.addEventListener('click',Reset)