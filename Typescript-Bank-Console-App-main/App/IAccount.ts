import { Accountype } from "./Enum.AccountType";
export interface IAccount
{
    name:string;
    age:number;
    accountType:Accountype;
    location:string;
    state:string;
    country:string;
    emailID:string;
    accountNumber:string;
    balance:number;
    minimumBalance:number;
}