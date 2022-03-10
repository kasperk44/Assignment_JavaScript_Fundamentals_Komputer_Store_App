const showBalanceElement = document.getElementById("salery");
const workElement = document.getElementById("work");
const transferElement = document.getElementById("transfer");
const repayElement = document.getElementById("repay");

 let currentSalery = 0; 



 /* Function to show the current balance */
 function showBalance(){
     salery.innerHTML = 'Current salary: ' + '€ ' + currentSalery;
 }

/* Function to get payed 100 euro everytime you work */
function handleSalery() {
    currentSalery = currentSalery + 100;
    updateSalery(); 
 }

/* Function to update the salery in the show salary function */
 function updateSalery(){
    salery.innerHTML = 'Current salary: ' + '€ ' + currentSalery;
}

/* Function to transfer money to the bank */
function handleTransfer() {
    if(currentSalery > 0 && loan.totalLoanAmount != 0)
    {
        newLoanPayment = currentSalery * 0.10;
        newcurrentSalery = currentSalery - newLoanPayment
        
        loan.totalLoanAmount =  loan.totalLoanAmount - newLoanPayment;
        loan.currentTotalBalance = loan.currentTotalBalance + newcurrentSalery; 
        currentSalery = 0    
        updateSalery(); 
        setInfomationBank()
        setInfomationLoan() 
       
    }

    else if(currentSalery > 0 && loan.totalLoanAmount == 0)
    {
        loan.currentTotalBalance = loan.currentTotalBalance + currentSalery;
        currentSalery = 0;
        updateSalery(); 
        setInfomationBank()
        setInfomationLoan() 
        
     }

    else
    {
        alert("You don't have money to transfer to the bank")
    }
}

/* Function to repay a loan whit all your money*/
function repayLoan(){
    if(loan.totalLoanAmount < currentSalery){
    currentSalery = currentSalery - loan.totalLoanAmount  
    loan.totalLoanAmount = 0;       
    updateSalery(); 
    setInfomationBank()
    setInfomationLoan() 
    
    }
    else{
        loan.totalLoanAmount = loan.totalLoanAmount - currentSalery;
        currentSalery = 0;
        updateSalery(); 
        setInfomationBank()
        setInfomationLoan() 
        
    }
}


 workElement.addEventListener("click", handleSalery);
 transferElement.addEventListener("click", handleTransfer);
 showBalance()
 repayElement.addEventListener("click", repayLoan);