var resultat = 0

function calcule(){
  var x =  document.getElementById('inp1').value
  var y =  document.getElementById('inp2').value
    resultat = parseInt(x)+parseInt(y)
    document.querySelector('.reponse').innerText=resultat
      document.getElementById('inp1').value=""
      document.getElementById('inp2').value=""  
}

document.querySelector('.btn3').addEventListener('click',calcule)

