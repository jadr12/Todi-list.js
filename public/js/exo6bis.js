var nombre1 = document.querySelector(".touche1")
var nombre2 = document.querySelector(".touche2")
var nombre3 = document.querySelector(".touche3")
var nombre4 = document.querySelector(".touche4")
var nombre5 = document.querySelector(".touche5")
var nombre6 = document.querySelector(".touche6")
var nombre7 = document.querySelector(".touche7")
var nombre8 = document.querySelector(".touche8")
var nombre9 = document.querySelector(".touche9")
var egale= document.querySelector('.egale')
var efface =document.querySelector(".effacer")
var fois = document.querySelector('.touchefois')
var plus = document.querySelector(".toucheplus")
var moins = document.querySelector(".touchemoins")
var divise = document.querySelector(".touchedivise")
var nombre0 =document.querySelector(".touche0")
let operateur = "";

let elem1 = "";
let elem2 = "";

let result = "";
let index;

let e = document.getElementById("jad");

nombre1.addEventListener('click', function(){
    e.value += "1";
});

nombre2.addEventListener('click', function(){
    e.value += "2";
});
nombre3.addEventListener('click', function(){
    e.value += "3";
});
nombre4.addEventListener('click', function(){
    e.value += "4";
});
nombre5.addEventListener('click', function(){
    e.value += "5";
});
nombre6.addEventListener('click', function(){
    e.value += "6";
});
nombre7.addEventListener('click', function(){
    e.value += "7";
});
nombre8.addEventListener('click', function(){
    e.value += "8";
});
nombre9.addEventListener('click', function(){
    e.value += "9";
});
nombre0.addEventListener('click', function(){
    e.value += "0";
});

plus.addEventListener('click', function(){
    operateur = "+";
    elem1 = e.value;
    e.value += operateur;
});

moins.addEventListener('click', function(){
    operateur = "-";
    elem1 = e.value;
    e.value += operateur;
});
fois.addEventListener('click', function(){
    operateur = "*";
    elem1 = e.value;
    e.value += operateur;
});
divise.addEventListener('click', function(){
    operateur = "/";
    elem1 = e.value;
    e.value += operateur;
});
egale.addEventListener('click', function(){
    switch(operateur){
        case "+":
            index = e.value.indexOf("+") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) + Number(elem2);
            e.value = result;
            break;
            case "-":
            index = e.value.indexOf("-") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) - Number(elem2);
            e.value = result;
            break;
            case "*":
            index = e.value.indexOf("*") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) * Number(elem2);
            e.value = result;
            break;
            case "/":
            index = e.value.indexOf("/") + 1;
            elem2 = e.value.substring(index);
            result = Number(elem1) / Number(elem2);
            e.value = result;
            break;
    }
});

function c(){
    e.value="";
}
efface.addEventListener('click',c)
