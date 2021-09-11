//make x from menuicon, apply animation change
function xBar(x) {
  x.classList.toggle("change");
}

function fadeOut() {
  //variables
  let background = document.getElementById("secondaryContent");
  let itemOptions1 = document.getElementById("testObject1");
  let itemOptions2 = document.getElementById("testObject2");
  let itemOptions3 = document.getElementById("testObject3");
  let menuBox = document.getElementById("testItem");

  //fade background, apply fade effect
  itemOptions1.classList.toggle("fadeIn1");
  itemOptions2.classList.toggle("fadeIn2");
  itemOptions3.classList.toggle("fadeIn3");
  background.classList.toggle("fadeOut");

  //make this as above
  if (menuBox.style.display != "block") {
    menuBox.style.display = "block";
  } else menuBox.style.display = "none";
}



const logPoop = async () => {

    let select = document.getElementById("courses");
    let tunti = select.options[select.selectedIndex].value;
    let timeSpent = document.getElementById("length").value;
    
    

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/poos", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        tunti: tunti,
        kesto: timeSpent
    }));

    alert("kakka logattu!");
    timeSpent = "";

};
