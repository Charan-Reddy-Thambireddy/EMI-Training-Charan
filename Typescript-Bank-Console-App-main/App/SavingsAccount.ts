import { Account } from "./Account";
import { Accountype } from "./Enum.AccountType";
import { IAccount } from "./IAccount";


export class SavingsAccount extends Account{
    
    constructor()
    {
        super();
        this.minimumBalance=500;
        this.balance=500;
        this.accountType=Accountype.Savings;
        this.accountNumber='Sav'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
    /*GenerateAccountNumber(): string {
        return 'Sav'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }*/
}