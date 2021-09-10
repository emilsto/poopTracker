
console.log("Hello");

const getPoops = async () => {
    console.log("Fetching poops...");



    const response = await fetch('http://localhost:5000/poos');
    console.log(response);

let data = await response.json();
console.log(data);

};
getPoops();





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
  