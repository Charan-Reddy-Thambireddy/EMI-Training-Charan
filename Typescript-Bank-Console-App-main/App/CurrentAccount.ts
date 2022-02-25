import { Account } from "./Account";
import { Accountype } from "./Enum.AccountType";
import { SavingsAccount } from "./SavingsAccount";

export class CurrentAccount extends Account{

    constructor()
    {
        super();
        this.minimumBalance=1000;
        this.balance=800;
        this.accountType=Accountype.Current;
        this.accountNumber='Curr'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
    /*GenerateAccountNumber(): string {
        return 'Curr'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }*/
}