import {question} from "readline-sync";
import { Account } from "./Account";
import { CurrentAccount } from "./CurrentAccount";
import { SavingsAccount } from "./SavingsAccount";

export var accountDetails=new Account();
var emailIDG:string= "";
var back:boolean=false;

welcomeNote();

export function welcomeNote()
{
    console.log('\x1b[33m%s\x1b[0m',"...........Dear Customer, Welcome to Our Bank!.............");
    console.log('\x1b[33m%s\x1b[0m',"Below are the services providing at our desk!");
    mainMenuOptions();
}


export function mainMenuOptions()
{
    console.log('\x1b[36m%s\x1b[0m',"New Account  -N  Account Details - D");
    console.log('\x1b[36m%s\x1b[0m',"View Balnace -B  Transaction     - T");
    console.log('\x1b[36m%s\x1b[0m',"Exit - X");
    startApp();
}


export function startApp()
{
    var mainMenu:string= question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();

    if(mainMenu=='N')
    {
        console.log('\x1b[34m%s\x1b[0m',"New Account Creation");
        newAccount();
    }
    else if(mainMenu=='D')
    {
        console.log('\x1b[34m%s\x1b[0m',"Account details!");
        displayDetails();
    }
    else if(mainMenu=='B')
    {
        console.log('\x1b[34m%s\x1b[0m',"View Balance");
        showBalance();
    }
    else if(mainMenu=='T')
    {
        console.log('\x1b[34m%s\x1b[0m',"Transaction");
        transaction();
    }
    else if(mainMenu=='X')
    {
        
    }
    else{
        console.log('\x1b[31m%s\x1b[0m',"Invalid Input. Please try again!");
        mainMenuOptions();
    }
}

export function backOptons()
{
    console.log('\x1b[36m%s\x1b[0m',"Retry - R  Back - B");
    var selected:string=question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if(selected=="R")
    {
        back=false
    }
    else if(selected=="B"){
        back= true
    }
    else{
        console.log('\x1b[31m%s\x1b[0m',"Invalid Input. Try again!");
        backOptons()
    }
}

export function accountTypeOptions()
{
    console.log('\x1b[36m%s\x1b[0m',"Savings Account - S  Current Account - C");
}
export function transactionTypeOptions()
{
    console.log('\x1b[36m%s\x1b[0m',"Deposit - D  Withdraw - W");
}
export function newAccount()
{
    accountTypeOptions();
    var accountTypeSelected:string= question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if(accountTypeSelected=="S")
    {
      var newsavingsAccount = new SavingsAccount();
      newsavingsAccount.name= question('Enter Your Name:');
      newsavingsAccount.age = Number(question("Enter your Age:"));
      if(newsavingsAccount.age>68)
      {
          console.log('\x1b[31m%s\x1b[0m',"As your age is greater than 68, You are not eligible to create account.");
          mainMenuOptions();
      }
      else
      {
        newsavingsAccount.location=question('Enter Your Location: ');
        newsavingsAccount.state=question('Enter Your state: ');
        newsavingsAccount.country=question('Enter Your Country: ');        
        getEmailID(); 
        newsavingsAccount.emailID=emailIDG;        
        console.log('\x1b[32m%s\x1b[0m','Savings Account Created Succesfully with Account Number :'+newsavingsAccount.accountNumber);
        accountDetails=newsavingsAccount;
        //console.log(Accountdetails);

        mainMenuOptions();
      }
            
    }
    else if(accountTypeSelected=="C")
    {
        var newCurrentAccount = new CurrentAccount();
        newCurrentAccount.name= question('Enter Your Name:');
        newCurrentAccount.age = Number(question("Enter your Age:"));
      if(newCurrentAccount.age>68)
      {
          console.log('\x1b[31m%s\x1b[0m',"As your age is greater than 68, You are not eligible to create account.");
          mainMenuOptions();
      }
      else
      {
        newCurrentAccount.location=question('Enter Your Location: ');
        newCurrentAccount.state=question('Enter Your state: ');
        newCurrentAccount.country=question('Enter Your Country: ');
        getEmailID(); 
        newCurrentAccount.emailID=emailIDG;        
        console.log('\x1b[32m%s\x1b[0m','Current Account Created Succesfully with Account Number :'+newCurrentAccount.accountNumber);
        accountDetails=newCurrentAccount;
        //console.log(Accountdetails);

        mainMenuOptions();
      }

    }
    else{
        console.log('\x1b[31m%s\x1b[0m',"Invalid input. Try again!")
        newAccount();
    }
}

export function getEmailID():void
{
   var email:string = question('Enter Your EmailID: ');
   if(!validateEmail(email))
   {
       console.log('\x1b[31m%s\x1b[0m',"Invalid Email!");
       getEmailID();
   } 
   else{
    emailIDG=email;
   }  
   
}
export function validateEmail(Email:string):boolean
{
    if(Email.search('[^ @]*@[^ @]*')==0)
    {
        return true;
    }
    else{
        return false;
    }
    
}

export function displayDetails():void
{
    if(accountDetails.accountNumber=="")
    {
        console.log('\x1b[31m%s\x1b[0m',"No data found! Please an create Account.");
        mainMenuOptions();
    }
    else{
        var accNo:string = question("Please enter the Account Number:");
        if(accNo==accountDetails.accountNumber)
        {
            //console.log(Accountdetails);
            console.log('\x1b[33m%s\x1b[0m',"Account Number:",accountDetails.accountNumber);
            console.log('\x1b[33m%s\x1b[0m',"Account Type:",accountDetails.accountType);
            console.log('\x1b[33m%s\x1b[0m',"Customer Name:",accountDetails.name);
            console.log('\x1b[33m%s\x1b[0m',"Address:",accountDetails.location+","+accountDetails.state+","+accountDetails.country);
            console.log('\x1b[33m%s\x1b[0m',"EmailID:",accountDetails.emailID);
            console.log('\x1b[33m%s\x1b[0m',"Total Balance:",accountDetails.balance);

            mainMenuOptions();
        }
        else{
            console.log('\x1b[31m%s\x1b[0m',"In correct Account Number !");
            backOptons();
            var retry:boolean = !back;
            if(retry)
            displayDetails();
            else
            mainMenuOptions();
        }
    }

}
export function showBalance()
{
    if(accountDetails.accountNumber=="")
    {
        console.log('\x1b[31m%s\x1b[0m',"No data found! Please create an Account.");
        mainMenuOptions();
    }
    else{
        var tmpName:string = question("Please enter the Account Holder Name:");
        if(tmpName==accountDetails.name)
        {
            console.log('\x1b[33m%s\x1b[0m',"Account Balance: "+accountDetails.balance);
            mainMenuOptions();
        }
        else{
            console.log('\x1b[31m%s\x1b[0m',"In correct Account Holder Name !");
            backOptons();
            var retry:boolean = !back;
            if(retry)
            showBalance();
            else
            mainMenuOptions();
        }
    }
}
export function transaction()
{
    if(accountDetails.accountNumber=="")
    {
        console.log('\x1b[31m%s\x1b[0m',"No data found! Please create an Account.");
        mainMenuOptions();
    }
    else{
        transactionTypeOptions();
        var selected:string =question("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
        if(selected=="D")
        {
            deposit();
        }
        else if(selected=="W"){
            withdraw();
        }
        else{
            console.log('\x1b[31m%s\x1b[0m',"Invalid Input!");
            transaction();
        }
    
    }
}

export function deposit()
{    
    var accno:string = question("Please enter the Account Number:");
    if(accno==accountDetails.accountNumber)
    {
        console.log('\x1b[33m%s\x1b[0m',"Account Balance: "+ accountDetails.balance);
        var amountDepositing:number = Number(question("Please Enter the Amount to be deposited: "));
        accountDetails.balance+=amountDepositing;
        console.log('\x1b[32m%s\x1b[0m',"Deposit of "+amountDepositing+" is Successfull!")
        console.log('\x1b[33m%s\x1b[0m',"Available Balance: "+ accountDetails.balance); 
        mainMenuOptions();              
    }
    else{
        console.log('\x1b[31m%s\x1b[0m',"In correct Account Number !");
        backOptons();
        var retry:boolean = !back;
        if(retry)
        deposit();
        else
        mainMenuOptions();
    }
}
export function withdraw()
{
    var accno:string = question("Please enter the Account Number:");
    if(accno==accountDetails.accountNumber)
    {
        console.log('\x1b[33m%s\x1b[0m',"Account Balance: "+ accountDetails.balance);        
        if(accountDetails.balance>accountDetails.minimumBalance)
        {
            console.log('\x1b[33m%s\x1b[0m',"Withdrawble Balance: "+ (accountDetails.balance-accountDetails.minimumBalance));
            withdrawAmount();                                     
        }
        else{
            console.log('\x1b[31m%s\x1b[0m',"Not Eligible to withdraw as balance is less than Minimum balance");
            mainMenuOptions();
        }             
    }
    else{
        console.log('\x1b[31m%s\x1b[0m',"In correct Account Number !");
        backOptons();
        var retry:boolean = !back;
        if(retry)
        withdraw();
        else
        mainMenuOptions();
    }
}

export function withdrawAmount():void
{
   var amountWithdrawing:number = Number(question("Please Enter the Amount to be withdraw: "));
   if(!validateWithdrawAmount(amountWithdrawing))
   {
        console.log('\x1b[31m%s\x1b[0m',"Insufficient Amount! please enter the amount less than withdrawable amount ");       
        backOptons();
        var retry:boolean = !back;
        if(retry)
        withdrawAmount();
        else
        mainMenuOptions();      
   } 
   else{
    accountDetails.balance-=amountWithdrawing;
        console.log('\x1b[32m%s\x1b[0m',"Withdrawal of "+amountWithdrawing+" is Successfull!")
        console.log('\x1b[33m%s\x1b[0m',"Available Balance: "+ accountDetails.balance);  
        mainMenuOptions();
   }  
}
export function validateWithdrawAmount(amountwithdrawing:number):boolean
{
    if(accountDetails.balance-amountwithdrawing>=accountDetails.minimumBalance)
    {
        return true;
    }
    else{
        return false;
    }
    
}