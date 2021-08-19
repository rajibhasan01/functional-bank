function checkValidation(amount){
    if(isNaN(amount) || amount < 0){
        return false;
    }
    else{
        return true;
    }
}

function inputGenerate(transition){
    const inputField = document.getElementById(transition +'-input');
    const newAmount = parseFloat(inputField.value);
    const amountField = document.getElementById(transition + '-total');
    const previousAmount = parseFloat(amountField.innerText);
    const check = checkValidation(newAmount);
    if(check){
        const total = newAmount + previousAmount; 
        const previouseBalance = document.getElementById('balance-total');
        const previouseTotalBalance = parseFloat(previouseBalance.innerText);
        if(previouseTotalBalance >= newAmount && transition == 'withdaw'){
            amountField.innerText = total;
            previouseBalance.innerText = previouseTotalBalance - newAmount;
        }
        else if(transition == 'withdaw'){
            console.log('Sorry you don\'t have sufficient balance');
        }
        else{
            amountField.innerText = total;
            previouseBalance.innerText = previouseTotalBalance + newAmount;
        }
        
    }
    else{
        console.log('Money can\' be negative');
        
    }
   inputField.value = '';

}



document.getElementById('deposit-btn').addEventListener('click', ()=>{
    inputGenerate('deposit');
})

document.getElementById('withdaw-btn').addEventListener('click', ()=>{
    inputGenerate('withdaw');
})