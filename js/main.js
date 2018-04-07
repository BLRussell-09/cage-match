console.log('yo!')

// Card Builder

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
}

const domStringBuilder = (userArr) => {
  let domString = '';
  userArr.forEach(element => {
    domString += `<div class="col-md-6">`
    domString += `<h3>${element}</h3>`
    domString += `</div>`
  });
  printToDom(domString, 'pic-holder');
}

const domStringBuilder2 = (userArr) => {
  let domString = '';
 
    domString += `<div class="col-md-6">`
    domString += `<h3>${userArr}</h3>`
    domString += `</div>`

  printToDom(domString, 'pic-holder');
}

const inputter = () => {

}

// Input 



// Button Event Listener

document.getElementById('btn1').addEventListener("click", startApp);
document.getElementById('btn1').addEventListener("click", startAppAgn)


// XHR

function iLoad() {
  const data = JSON.parse(this.responseText);
  domStringBuilder2(data.name);
}

function loadAgain() {
  const data = JSON.parse(this.responseText);
  domStringBuilder2(data.name);
}

function iFail() {
  console.log('Something went wrong!');
}

function startApp() {
  let userName = document.getElementById('user1').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", iLoad);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
};

function startAppAgn() {
  let userName = document.getElementById('user2').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", loadAgain);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
};

