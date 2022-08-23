const list = [];

function playerList(){
  const listContainer = document.getElementById('selected-five');

  if(list.length > 5){
    alert('cant add more')
  }
  else{
    listContainer.textContent = '';
    for(let i = 0; i < list.length; i++){
      const li = document.createElement('li');
      li.innerHTML= `
      <li>${i + 1} ${list[i].playerName}</li>
      `;
      listContainer.appendChild(li);
      
    }
  }
 
}

function addToList(element){
  const playerName = element.parentNode.parentNode.children[0].innerText;
  const pd = {
    playerName : playerName,
  }


  list.push(pd);

  playerList();
}
 console.log('new file added')