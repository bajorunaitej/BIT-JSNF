// Bank account with properties for account number and balance. Include metgods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money and withdraw a portion of it.

class BankAccount{
    //Privati objekto savybė
    //Klasės viduje balance - laukas
    #balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = 0;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if(amount > this.#balance) console.log("You're poor");
        else this.#balance -= amount;
    }
    //Encapsulation
    get balance() {
        return this.#balance;
    }
}

const myBankAccount = new BankAccount('545666782121', 600);
myBankAccount.withdraw(700);
myBankAccount.accountNumber; //savybė

//Privatus laukas - #, nerodomas
console.log((myBankAccount.balance));