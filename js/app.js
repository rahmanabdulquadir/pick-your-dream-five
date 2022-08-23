document.getElementById('btn-messi').addEventListener('click', function(){
  const plrMessi = document.getElementById('messi').innerText;
  const plrSelect = document.getElementById('')
  // plrSelect.innerText = plrMessi;
  document.getElementById("btn-messi").disabled = true;
})
document.getElementById('btn-neymar').addEventListener('click', function(){
  const plrneymar = document.getElementById('neymar').innerText;
  const plrSelect = document.getElementById('add')
  // plrSelect.innerText = plrneymar;
  document.getElementById("btn-neymar").disabled = true;
})
document.getElementById('btn-mbappe').addEventListener('click', function(){
  const plrMbappe = document.getElementById('mbappe').innerText;
  const plrSelect = document.getElementById('add')
  // plrSelect.innerText = plrMbappe;
  document.getElementById("btn-mbappe").disabled = true;
})
document.getElementById('btn-modrich').addEventListener('click', function(){
  const plrModrich = document.getElementById('modrich').innerText;
  const plrSelect = document.getElementById('add')
  // plrSelect.innerText = plrModrich;
  document.getElementById("btn-modrich").disabled = true;
})
document.getElementById('btn-benzema').addEventListener('click', function(){
  const plrBenzema = document.getElementById('benzema').innerText;
  const plrSelect = document.getElementById('add')
  // plrSelect.innerText = plrBenzema;
  document.getElementById("btn-benzema").disabled = true;
})
document.getElementById('btn-ronaldo').addEventListener('click', function(){
  const plrRonaldo = document.getElementById('ronaldo').innerText;
  const plrSelect = document.getElementById('select-name-6')
  // plrSelect.innerText = plrRonaldo;
  document.getElementById("btn-ronaldo").disabled = true;
})
const warningAlert = document.getElementById('warning');
console.log(warningAlert);
if(warningAlert.children > 4){
  alert('choose again')
}

console.log('just been added text')