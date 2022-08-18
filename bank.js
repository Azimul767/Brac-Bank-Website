document.getElementById('deposide-button').addEventListener('click', function() {
    const deposideInput = document.getElementById('deposide-input');
    const deposideNewValueString = deposideInput.value;
    const deposideNewValue = parseFloat(deposideNewValueString);

    deposideInput.value = '';
    if(isNaN(deposideNewValue)) {
        alert ('Please Provide A Number')
        return;
    }

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


   
})





document.getElementById('withdraw-button').addEventListener('click',function(){
    // Input Withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawNewString = withdrawInput.value ;
    const withdrawNew = parseFloat (withdrawNewString);
   
    withdrawInput.value = '';

    if(isNaN(withdrawNew)) {
        alert ('Please Enter A Valide Number')
        return;
    }
   

    // Total Withdraw 
     const totalWithdraw = document.getElementById ('total-withdraw')
     const PreviousWithdrawString = totalWithdraw.innerText;
     const PreviousWithdraw = parseFloat(PreviousWithdrawString);

     
    

    //   Balance Section
    const totalBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = totalBalanceElement.innerText;
    const previousBalance = parseFloat (previousBalanceString);


    if(withdrawNew > previousBalance) {
        alert ('Tor Balance e Eto Taka Nai ');
        return;
    }
    
    const totalNewwitdraw = PreviousWithdraw + withdrawNew;
     totalWithdraw.innerText = totalNewwitdraw;

  const balanceLossTotal = previousBalance-withdrawNew;
   totalBalanceElement.innerText = balanceLossTotal

   
})