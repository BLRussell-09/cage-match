console.log('yo!')

// Card Builder

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
}

const domStringBuilder2 = (userArr) => {
  let domString = '';
    domString += `<div class="col-md-6">`
    domString += `<h3>${userArr.total}</h3>`
    domString += `</div>`
  printToDom(domString, 'pic-holder');
}

const domStringBuilder = (userArr) => {
  let domString = '';
 
    domString += `<div class="col-md-6">`
    domString += `<h3>${userArr.name}</h3>`
    domString += `<img src="${userArr.gravatar_url}">`
    domString += `<h3>${userArr.points.total}</h3>`
    domString += `</div>`

  printToDom(domString, 'pic-holder');

}

const inputter = () => {

}

// Winner Bar
let totalPoints = [] 

const pointBuilder = (pointsArr) => {
  if(totalPoints[0] > totalPoints[1]){
    console.log("The winner is Player 1")
  }
  else if(totalPoints[0] < totalPoints[1]){
    console.log("The winner is Player 2")
  }
  else if(totalPoints[0] = totalPoints[1]){
    console.log("It's a tie!")
  }
  else {
    console.log("Error!!")
  }
}

// Button Event Listener

document.getElementById('btn1').addEventListener("click", startApp);
document.getElementById('btn1').addEventListener("click", startAppAgn)

// XHR

function player1() {
  const data = JSON.parse(this.responseText);
  domStringBuilder(data);
  totalPoints.push(data.points.total);
}

function player2() {
  const data = JSON.parse(this.responseText);
  domStringBuilder(data);
  totalPoints.push(data.points.total);
  pointBuilder(totalPoints)
}

function iFail() {
  console.log('Something went wrong!');
}

function startApp() {
  let userName = document.getElementById('user1').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", player1);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
};

function startAppAgn() {
  let userName = document.getElementById('user2').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", player2);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
};

