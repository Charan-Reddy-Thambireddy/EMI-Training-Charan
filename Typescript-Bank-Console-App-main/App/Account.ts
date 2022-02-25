import { Accountype } from "./Enum.AccountType";
import { IAccount } from "./IAccount";

export class Account implements IAccount
{
    name: string="";
    age: number=0;
    accountNumber: string="";
    location: string="";
    state: string="";
    country: string="";
    emailID: string="";
    accountType!: Accountype;
    balance:number=0;
    minimumBalance: number=0;

    /*GenerateAccountNumber():string{
        
        return 'XYZ'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }*/

    
    






}