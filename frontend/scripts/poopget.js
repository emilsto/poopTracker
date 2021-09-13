const getPoops = async () => {
  const response = await fetch("http://109.235.71.191:5000/poos");

  let data = await response.json();

  //for storing datapoints
  let dataArray = [];

  //loop to fill the array with wanted data and formatting date to locale
  for (i = 0; i < data.length; i++) {
    let dateHolder = data[i].date;
    dateHolder = new Date(dateHolder).toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    let tempObj = {
      KAKKAAJA : data[i].kakkaaja,
      "KAKKA NRO#": i + 1,
      TUNTI: data[i].tunti,
      "KESTO (MIN) ": data[i].kesto,
      LOGATTU: dateHolder,
    };
    dataArray.push(tempObj);
  }

  dataArray = dataArray.reverse();

  //set columns
  let col = [];
  for (let i = 0; i < dataArray.length; i++) {
    for (let key in dataArray[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  //get table from html
  let table = document.getElementById("dataTable");

  //create table
  let tr = table.insertRow(-1);

  for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  // add json data to the table
  for (let i = 0; i < data.length; i++) {
    tr = table.insertRow(-1);

    for (let j = 0; j < col.length; j++) {
      let tabCell = tr.insertCell(-1);
      tabCell.innerHTML = dataArray[i][col[j]];
    }
  }

  // to page
  let dataPutter = document.getElementById("dataZone");
  dataPutter.appendChild(table);
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
