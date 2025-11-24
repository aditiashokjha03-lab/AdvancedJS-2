function createBankAccount() {
  let balance = 0;

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance: function() {
      console.log(`Current balance: ${balance}`);
    }
  };
}

const account = createBankAccount();
account.deposit(500);   
account.withdraw(200);  
account.withdraw(400);  
account.checkBalance(); 
console.log(account.balance); 


// transaction history
function createBankAccount() {
  let balance = 0;
  let transactionHistory = []; 

  return {
    deposit: function(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        transactionHistory.push(`Failed withdrawal: ${amount}`);
        console.log("Insufficient balance");
      }
    },
    checkBalance: function() {
      console.log(`Current balance: ${balance}`);
    },
    getHistory: function() {
      console.log("Transaction History:", transactionHistory);
      return transactionHistory;
    }
  };
}

const account = createBankAccount();
account.deposit(500);  
account.withdraw(200); 
account.withdraw(400); 
account.checkBalance(); 
account.getHistory();  




