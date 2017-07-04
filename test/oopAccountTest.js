'use strict'
const expect    = require("chai").expect;

const BankAccount = require('../oopAccount.js').BankAccount;
const CurrentAccount = require('../oopAccount.js').CurrentAccount;


describe('Creates object of class CurrentAccount that inherits from Account', () => {  

  it("CurrentAccount created should be a type of `object`", () => {
			let john = new CurrentAccount("John Philemon", 0);
			expect(typeof(john)).to.eql(typeof({}));
		});

  it("Account created should be an instance of the CurrentAccount Class ", () => {
			let john = new CurrentAccount("John Philemon", 0);
			expect(john).to.be.an.instanceof(CurrentAccount);
		});

  it("Account name and balance should be a property of the Account", () => {
			let mabel = new CurrentAccount("Mabel Harmony", 30);
			expect(mabel.name).to.eql("Mabel Harmony");
			expect(mabel.balance).to.eql(30);
		});

  it("Displays status of the account at the particular time", () => {
			let alade = new CurrentAccount("Alade Wura", 0);
			expect(alade.status()).to.eql("Account Name : Alade Wura , Account Balance : 0");
		});

  it("Deposited amount is added to the balance if deposit is made", () => {
			let alade = new CurrentAccount("Alade Wura", 0);
			expect(alade.deposit(120)).to.eql("Deposit Successful. Balance: 120");
		});

  it("Insufficient balance occurs if user with a normal account withdraws amount greater than balance ", () => {
			let shalom = new BankAccount("Shalom Oyiza", 70);
			expect(shalom.withdraw(80)).to.eql("Insufficient Balance.");
		});

  it("Withdrawn amount is deducted from the balance if withdrawal is made", () => {
			let alade = new CurrentAccount("Alade Wura", 55);
			expect(alade.withdraw(5)).to.eql("Withdrwawal Successful. Balance: 50");
		});

  it("Insufficient balance occurs if user with a current account withdraws amount greater than minimum balance of 50", () => {
			let alade = new CurrentAccount("Alade Wura", 55);
			expect(alade.withdraw(10)).to.eql("Insufficient Balance. Minimum balance is 50");
		});
});
