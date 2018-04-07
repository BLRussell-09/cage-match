console.log('yo!')

// Card Builder

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
}

const domStringBuilder = (userArr) => {
  let domString = '';
 
    domString += `<div class="col-md-6 user-card">`
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
  let domString = '';
  if(totalPoints[0] > totalPoints[1]){
    domString += `<div class="col-md-6 col-md-offset-3 winner-card">`
    domString += `<h3>"The Winner is Player 1"</h3>`
    domString += `</div>`
  }
  else if(totalPoints[0] < totalPoints[1]){
    domString += `<div class="col-md-6 col-md-offset-3 winner-card">`
    domString += `<h3>"The winner is Player 2"</h3>`
    domString += `</div>`
  }
  else if(totalPoints[0] = totalPoints[1]){
    domString += `<div class="col-md-6 col-md-offset-3 winner-card">`
    domString += `<h3>"It's a tie!"</h3>`
    domString += `</div>`
  }
  else {
    console.log("Error!!")
  }
  printToDom(domString, "winner")
}

// Button Event Listener

document.getElementById('btn1').addEventListener("click", startPlayer1);

// XHR

function player1() {
  const data = JSON.parse(this.responseText);
  domStringBuilder(data);
  totalPoints.push(data.points.total);
  startPlayer2()
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

function startPlayer1() {
  let userName = document.getElementById('user1').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", player1);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
  
};

function startPlayer2() {
  let userName = document.getElementById('user2').value
  let myRequest = new XMLHttpRequest;
  myRequest.addEventListener("load", player2);
  myRequest.addEventListener("error", iFail);
  myRequest.open("GET", "https://teamtreehouse.com/" + userName + ".json");
  myRequest.send();
};

