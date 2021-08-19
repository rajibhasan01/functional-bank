document.getElementById('deposit-btn').addEventListener('click', ()=>{
    const depositField = document.getElementById('deposit-input');
    const newDeposit = parseFloat(depositField.value);
    
    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(previousDeposit.innerText);

    const totalDeposit = newDeposit + previousDepositAmount;
    previousDeposit.innerText = totalDeposit;

    const previouseBalance = document.getElementById('balance-total');
    const previouseBalanceAmount = parseFloat(previouseBalance.innerText);
    const totalBalance = previouseBalanceAmount + newDeposit;
    previouseBalance.innerText = totalBalance;

    depositField.value = '';
})

document.getElementById('withdaw-btn').addEventListener('click', ()=>{
    const widthawField = document.getElementById('withdaw-input');
    const newWidthaw = parseFloat(widthawField.value);
    
    const previousWidthaw = document.getElementById('widthaw-total');
    const previousWidthawAmount = parseFloat(previousWidthaw.innerText);

    const totalWidthaw = newWidthaw + previousWidthawAmount;
    previousWidthaw.innerText = totalWidthaw;

    const previouseBalance = document.getElementById('balance-total');
    const previouseBalanceAmount = parseFloat(previouseBalance.innerText);
    const totalBalance = previouseBalanceAmount - newWidthaw;
    previouseBalance.innerText = totalBalance;

    widthawField.value = '';
}) 
