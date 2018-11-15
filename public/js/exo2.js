// EXO 2

var x = document.querySelectorAll('a');
 x[0].addEventListener('click',section1)

 function section1(){
    event.preventDefault();
  document.querySelector('.section1').style.display="initial"
  document.querySelector('.section2').style.display="none"
  document.querySelector('.section3').style.display="none"
  document.querySelector('.section4').style.display="none"
  document.querySelector('.section5').style.display="none"
  document.querySelector('.section6').style.display="none"

}




var x = document.querySelectorAll('a');
 x[1].addEventListener('click',refresh)

function refresh(){
     event.preventDefault();
   document.querySelector('.section1').style.display="none"
   document.querySelector('.section2').style.display="initial"
   document.querySelector('.section3').style.display="none"
   document.querySelector('.section4').style.display="none"
   document.querySelector('.section5').style.display="none"
   document.querySelector('.section6').style.display="none"

}

var x = document.querySelectorAll('a');
 x[2].addEventListener('click',section2)

 function section2(){
     event.preventDefault();
    document.querySelector('.section1').style.display="none"
    document.querySelector('.section2').style.display="none"
    document.querySelector('.section3').style.display="initial"
    document.querySelector('.section4').style.display="none"
    document.querySelector('.section5').style.display="none"
    document.querySelector('.section6').style.display="none"
 
 }

 var x = document.querySelectorAll('a');
 x[3].addEventListener('click',section3)

 function section3(){
    event.preventDefault();
    document.querySelector('.section1').style.display="none"
    document.querySelector('.section2').style.display="none"
    document.querySelector('.section3').style.display="none"
    document.querySelector('.section4').style.display="initial"
    document.querySelector('.section5').style.display="none"
    document.querySelector('.section6').style.display="none"
 
 }

 var x = document.querySelectorAll('a');
 x[4].addEventListener('click',section4)

 function section4(){
    event.preventDefault();
    document.querySelector('.section1').style.display="none"
    document.querySelector('.section2').style.display="none"
    document.querySelector('.section3').style.display="none"
    document.querySelector('.section4').style.display="none"
    document.querySelector('.section5').style.display="initial"
    document.querySelector('.section6').style.display="none"
 }

 var x = document.querySelectorAll('a');
 x[5].addEventListener('click',section5)


 function section5(){
    event.preventDefault();
    document.querySelector('.section1').style.display="none"
    document.querySelector('.section2').style.display="none"
    document.querySelector('.section3').style.display="none"
    document.querySelector('.section4').style.display="none"
    document.querySelector('.section5').style.display="none"
    document.querySelector('.section6').style.display="initial"
 }

 