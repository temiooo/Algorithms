'use strict'
//Creating an Account Class
class BankAccount{
	constructor(name, balance){
		this.name = name;
		this.balance = balance;
	}

  status(){
    return (`Account Name : ${this.name} , Account Balance : ${this.balance}`); 
  }
  	
	deposit(amount){
		this.balance = this.balance + amount;
		return (`Deposit Successful. Balance: ${this.balance}`);
	}

	withdraw(amount){
		if (amount > this.balance){
			return "Insufficient Balance."
		} else {
			this.balance = this.balance - amount
			return(`Withdrwawal Successful. Balance: ${this.balance}`);
		}
	}
}

//Creating CurrentAccount Class that inherits from Account
class CurrentAccount extends BankAccount {

  	withdraw(amount){ //overriding the withdraw amount from the Account Class
  		//Minimum balance for current Account is always 50 for withdrawal to be possible;
		if (amount > (this.balance - 50)){
			return "Insufficient Balance. Minimum balance is 50";
		} else {
      this.balance = this.balance - amount
			return(`Withdrwawal Successful. Balance: ${this.balance}`);
		}
	}

}

module.exports = {
    BankAccount: BankAccount,
    CurrentAccount: CurrentAccount,
}