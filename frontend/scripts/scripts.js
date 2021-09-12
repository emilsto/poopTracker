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

//load stats to main page from DB
const getPoops = async () => {
  console.log("Fetching poops...");
  const response = await fetch("http://109.235.71.191:5000/poos");
  let data = await response.json();

  // get the stats from database to variables
  let totalTime = 0;
  for (let i = 0; i < data.length; i++) {
    totalTime = totalTime + data[i].kesto;
  }
  let numberOfPoops = data.length;
  let dataCollectionStart = data[0].date;
  dataCollectionStart = new Date(dataCollectionStart).toLocaleString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  //append stats to html
  document.getElementById("stats-highlight").innerHTML =
    "Seuranta aloitettiin " +
    dataCollectionStart +
    " ja palveluun on tallennettu " +
    numberOfPoops +
    " kakkasessiota, joilla on vietetty yhteensä " +
    totalTime +
    " minuuttia.";
};
getPoops();
