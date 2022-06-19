function productObjClick(){
    document.getElementById("showHidden").style.display = "block";
}


const ethereumButton = document.querySelector('.button5');
ethereumButton.addEventListener('click', () => {

  ethereum.request({ method: 'eth_requestAccounts' });
});