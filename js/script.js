// function getValueFromInput(id) {
//   const inputField = document.getElementById(id);
//   const inputFieldString = inputField.innerText;
//   // const inputFieldNumber = parseFloat(inputFieldString)
//   return inputFieldNumber
// }
// document.getElementById('btn-select').addEventListener('click', function(){
//   const playerName = getValueFromInput('player-name');
// })
const playerArray = [];

function display(plrName) {
  console.log(plrName);
  const olBody = document.getElementById("players");
  olBody.innerHTML = "";
  for (let i = 0; i < plrName.length; i++) {
    // console.log(playerArray[i].playerName);
    const name = playerArray[i].playerName;
    const tr = document.createElement("tr");

    tr.innerText = `
    <th>${i}</th>`;


    olBody.appendChild(tr);
  }
}

function selectPlayer(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;
  // console.log(playerName);
  const plrObj = {
    playerName: playerName,
  };
  playerArray.push(plrObj);
  display(playerArray);
}
