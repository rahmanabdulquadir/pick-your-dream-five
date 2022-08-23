// function getValueFromInput(id) {
//   const inputField = document.getElementById(id);
//   const inputFieldString = inputField.value;
//   const inputFieldNumber = parseFloat(inputFieldString)
//   return inputFieldNumber
// }

document.getElementById('btn-calculate').addEventListener('click', function(){
  const perPlayer = document.getElementById('price-field');
  const perPlayerValueString = perPlayer.value;
  const perPlayerValue = parseInt(perPlayerValueString);
  

  const playerExpense = document.getElementById('player-expense');
  const playerExpenseValueString = playerExpense.innerText;
  const playerExpenseValue = parseInt(playerExpenseValueString);
  

  const totalExpense = perPlayerValue * list.length;
  playerExpense.innerText = totalExpense;
  perPlayer.value = ''

})

document.getElementById('btn-total-calculation').addEventListener('click', function(){
  const perPlayer = document.getElementById('price-field');
  const perPlayerValueString = perPlayer.value;
  const perPlayerValue = parseInt(perPlayerValueString);
  

  const playerExpense = document.getElementById('player-expense');
  const playerExpenseValueString = playerExpense.innerText;
  const playerExpenseValue = parseInt(playerExpenseValueString);
  

  const totalExpense = perPlayerValue * 5;
  playerExpense.innerText = totalExpense;














  const managerField = document.getElementById('manager-field');
  const managerFieldValueString = managerField.value;
  const managerFieldValue = parseInt(managerFieldValueString);

  const coachField = document.getElementById('coach-field');
  const coachFieldValueString = coachField.value;
  const coachFieldValue = parseInt(coachFieldValueString);

  const totalExpenseAmount = document.getElementById('total-expense-amount');
  const totalExpenseAmountValueString = totalExpenseAmount.innerText;
  const totalExpenseAmountValue = parseInt(totalExpenseAmountValueString);

  const finalTotalExpenseAmount = managerFieldValue + coachFieldValue + playerExpenseValue;
  totalExpenseAmount.innerText = finalTotalExpenseAmount;
  console.log(totalExpenseAmount);
})