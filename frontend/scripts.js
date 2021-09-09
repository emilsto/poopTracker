function xBar(x) {
    x.classList.toggle("change");
  } 

function fadeOut(){
  let background = document.getElementById("secondaryContent");
    background.classList.toggle("fadeOut");
  let menuBox = document.getElementById("testItem");
  if (menuBox.style.display != "block"){
    menuBox.style.display = "block";
  }
  else 
    menuBox.style.display = "none";
  let itemOptions1 = document.getElementById("testObject1");
  let itemOptions2 = document.getElementById("testObject2");
  let itemOptions3 = document.getElementById("testObject3");
    itemOptions1.classList.toggle("fadeIn1");
    itemOptions2.classList.toggle("fadeIn2");
    itemOptions3.classList.toggle("fadeIn3");

}



  function drinkRandomizer(){
    let ingridientList = {vesi, maito, viini};

    
  }

