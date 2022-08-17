document.getElementById('deposide-button').addEventListener('click', function() {
    const deposideInput = document.getElementById('deposide-input');
    const deposideNewValueString = deposideInput.value;
    const deposideNewValue = parseFloat(deposideNewValueString);

    const totalDeposideElements = document.getElementById('total-deposide');
    const PreviousTotalDeposideString = totalDeposideElements.innerText
    const PreviousTotalDeposide = parseFloat(PreviousTotalDeposideString)
    
    deposideNewTotal = PreviousTotalDeposide + deposideNewValue;
    totalDeposideElements.innerText = deposideNewTotal;


//   Balance Section
    const totalBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = totalBalanceElement.innerText;
    const previousBalance = parseFloat (previousBalanceString);

    balanceNewtotal = previousBalance+deposideNewValue;
    totalBalanceElement.innerText = balanceNewtotal;


    deposideInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    // Input Withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawNewString = withdrawInput.value ;
    const withdrawNew = parseFloat (withdrawNewString);

    // Total Withdraw 
     const totalWithdraw = document.getElementById ('total-withdraw')
     const PreviousWithdrawString = totalWithdraw.innerText;
     const PreviousWithdraw = parseFloat(PreviousWithdrawString);


     totalNewwitdraw = PreviousWithdraw + withdrawNew;
     totalWithdraw.innerText = totalNewwitdraw;

    //   Balance Section
    const totalBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = totalBalanceElement.innerText;
    const previousBalance = parseFloat (previousBalanceString);

   balanceLossTotal = previousBalance-withdrawNew;
   totalBalanceElement.innerText = balanceLossTotal

   withdrawInput.value = '';
})