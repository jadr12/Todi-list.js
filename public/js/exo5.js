function newBtn() {

    let img = document.createElement("img");
  
    img.setAttribute("src", "../../public/img/oeuf.png");
  
    document.querySelector('.zaki').appendChild(img);
  
  }
  
  let btn = document.querySelector('.zak')
  
  btn.addEventListener('click', newBtn)