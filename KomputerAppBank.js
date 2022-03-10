const balanceElement = document.getElementById("balance");
const loanElement = document.getElementById("loan");
const getLoanElement = document.getElementById("getLoan");
const totalbalanceElement = document.getElementById("totalBalance");
const loan = {currentTotalBalance:0, totalLoanAmount:0, startLoan:0};

class KomputerAppBank{
 
    constructor(balance, loan, totalLoan){
        this.balance = balance;
        this.loan = loan;
        this.totalLoan = totalLoan;
        }
    }

/* Function that set and shows the initial bank balance to zero */   
function setInfomationBank(){     
    balanceElement.innerText = 'Current balance: ' + '€ ' +  parseInt(loan.currentTotalBalance);    
    }

    /* Function that set and shows the initial loan balance to zero */   
function setInfomationLoan(){      
    loanElement.innerText = 'Current loan: ' + '€ ' + loan.totalLoanAmount;
     }


    
    
/*function to get a loan*/
function getALoan(){    
    if(loan.currentTotalBalance == 0){
        alert("you need to transfer money to the bank to get a loan");
        return;
    }
    else if(loan.totalLoanAmount > 0){
        alert("you already have an outstanding loan")
    }
    else{
        while(true){
            let input = prompt("Input loan amount: ");
            if (input > 2 * loan.currentTotalBalance ) {
                alert("You can only get twice the amout of your current balance");
                return true;
            }
            else if (input == 0) {
                alert("you need to enter a amount");
            }
            else if (input.length <= 0 || isNaN(input)) {
                alert("Please enter loan amount to continue");
            }
            else
                alert("loan has been submitted")
                loan.startLoan = input;
                loan.totalLoanAmount = input;
                loan.currentTotalBalance = (parseInt(loan.startLoan) + parseInt(loan.currentTotalBalance));

                setInfomationLoan()
                setInfomationBank()
                
                return true;
        }
        
    }
}

setInfomationBank()
setInfomationLoan() 

getLoanElement.addEventListener("click", getALoan);