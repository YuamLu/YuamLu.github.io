function productObjClick(){
    document.getElementById("showHidden").style.display = "block";
}



const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}