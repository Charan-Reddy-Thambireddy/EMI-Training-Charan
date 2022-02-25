"use strict";
exports.__esModule = true;
exports.validateWithdrawAmount = exports.withdrawAmount = exports.withdraw = exports.deposit = exports.transaction = exports.showBalance = exports.displayDetails = exports.validateEmail = exports.getEmailID = exports.newAccount = exports.transactionTypeOptions = exports.accountTypeOptions = exports.backOptons = exports.startApp = exports.mainMenuOptions = exports.welcomeNote = exports.accountDetails = void 0;
var readline_sync_1 = require("readline-sync");
var Account_1 = require("./Account");
var CurrentAccount_1 = require("./CurrentAccount");
var SavingsAccount_1 = require("./SavingsAccount");
exports.accountDetails = new Account_1.Account();
var emailIDG = "";
var back = false;
welcomeNote();
function welcomeNote() {
    console.log('\x1b[33m%s\x1b[0m', "...........Dear Customer, Welcome to Our Bank!.............");
    console.log('\x1b[33m%s\x1b[0m', "Below are the services providing at our desk!");
    mainMenuOptions();
}
exports.welcomeNote = welcomeNote;
function mainMenuOptions() {
    console.log('\x1b[36m%s\x1b[0m', "New Account  -N  Account Details - D");
    console.log('\x1b[36m%s\x1b[0m', "View Balnace -B  Transaction     - T");
    console.log('\x1b[36m%s\x1b[0m', "Exit - X");
    startApp();
}
exports.mainMenuOptions = mainMenuOptions;
function startApp() {
    var mainMenu = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    switch (mainMenu) {
        case 'N':
            console.log('\x1b[34m%s\x1b[0m', "New Account Creation");
            newAccount();
        case 'D':
            console.log('\x1b[34m%s\x1b[0m', "Account details!");
            displayDetails();
        case 'B':
            console.log('\x1b[34m%s\x1b[0m', "View Balance");
            showBalance();
        case 'T':
            console.log('\x1b[34m%s\x1b[0m', "Transaction");
            transaction();
        case 'X':
            console.log('\x1b[34m%s\x1b[0m', "Thanks for using our Application!");
            break;
        default:
            console.log('\x1b[31m%s\x1b[0m', "Invalid Input. Please try again!");
            mainMenuOptions();
    }
}
exports.startApp = startApp;
function backOptons() {
    console.log('\x1b[36m%s\x1b[0m', "Retry - R  Back - B");
    var selected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if (selected == "R") {
        back = false;
    }
    else if (selected == "B") {
        back = true;
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "Invalid Input. Try again!");
        backOptons();
    }
}
exports.backOptons = backOptons;
function accountTypeOptions() {
    console.log('\x1b[36m%s\x1b[0m', "Savings Account - S  Current Account - C");
}
exports.accountTypeOptions = accountTypeOptions;
function transactionTypeOptions() {
    console.log('\x1b[36m%s\x1b[0m', "Deposit - D  Withdraw - W");
}
exports.transactionTypeOptions = transactionTypeOptions;
function newAccount() {
    accountTypeOptions();
    var accountTypeSelected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
    if (accountTypeSelected == "S") {
        var newsavingsAccount = new SavingsAccount_1.SavingsAccount();
        newsavingsAccount.name = (0, readline_sync_1.question)('Enter Your Name:');
        newsavingsAccount.age = Number((0, readline_sync_1.question)("Enter your Age:"));
        if (newsavingsAccount.age > 68) {
            console.log('\x1b[31m%s\x1b[0m', "As your age is greater than 68, You are not eligible to create account.");
            mainMenuOptions();
        }
        else {
            newsavingsAccount.location = (0, readline_sync_1.question)('Enter Your Location: ');
            newsavingsAccount.state = (0, readline_sync_1.question)('Enter Your state: ');
            newsavingsAccount.country = (0, readline_sync_1.question)('Enter Your Country: ');
            getEmailID();
            newsavingsAccount.emailID = emailIDG;
            console.log('\x1b[32m%s\x1b[0m', 'Savings Account Created Succesfully with Account Number :' + newsavingsAccount.accountNumber);
            exports.accountDetails = newsavingsAccount;
            //console.log(Accountdetails);
            mainMenuOptions();
        }
    }
    else if (accountTypeSelected == "C") {
        var newCurrentAccount = new CurrentAccount_1.CurrentAccount();
        newCurrentAccount.name = (0, readline_sync_1.question)('Enter Your Name:');
        newCurrentAccount.age = Number((0, readline_sync_1.question)("Enter your Age:"));
        if (newCurrentAccount.age > 68) {
            console.log('\x1b[31m%s\x1b[0m', "As your age is greater than 68, You are not eligible to create account.");
            mainMenuOptions();
        }
        else {
            newCurrentAccount.location = (0, readline_sync_1.question)('Enter Your Location: ');
            newCurrentAccount.state = (0, readline_sync_1.question)('Enter Your state: ');
            newCurrentAccount.country = (0, readline_sync_1.question)('Enter Your Country: ');
            getEmailID();
            newCurrentAccount.emailID = emailIDG;
            console.log('\x1b[32m%s\x1b[0m', 'Current Account Created Succesfully with Account Number :' + newCurrentAccount.accountNumber);
            exports.accountDetails = newCurrentAccount;
            //console.log(Accountdetails);
            mainMenuOptions();
        }
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "Invalid input. Try again!");
        newAccount();
    }
}
exports.newAccount = newAccount;
function getEmailID() {
    var email = (0, readline_sync_1.question)('Enter Your EmailID: ');
    if (!validateEmail(email)) {
        console.log('\x1b[31m%s\x1b[0m', "Invalid Email!");
        getEmailID();
    }
    else {
        emailIDG = email;
    }
}
exports.getEmailID = getEmailID;
function validateEmail(Email) {
    if (Email.search('[^ @]*@[^ @]*') == 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateEmail = validateEmail;
function displayDetails() {
    if (exports.accountDetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please an create Account.");
        mainMenuOptions();
    }
    else {
        var accNo = (0, readline_sync_1.question)("Please enter the Account Number:");
        if (accNo == exports.accountDetails.accountNumber) {
            //console.log(Accountdetails);
            console.log('\x1b[33m%s\x1b[0m', "Account Number:", exports.accountDetails.accountNumber);
            console.log('\x1b[33m%s\x1b[0m', "Account Type:", exports.accountDetails.accountType);
            console.log('\x1b[33m%s\x1b[0m', "Customer Name:", exports.accountDetails.name);
            console.log('\x1b[33m%s\x1b[0m', "Address:", exports.accountDetails.location + "," + exports.accountDetails.state + "," + exports.accountDetails.country);
            console.log('\x1b[33m%s\x1b[0m', "EmailID:", exports.accountDetails.emailID);
            console.log('\x1b[33m%s\x1b[0m', "Total Balance:", exports.accountDetails.balance);
            mainMenuOptions();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
            backOptons();
            var retry = !back;
            if (retry)
                displayDetails();
            else
                mainMenuOptions();
        }
    }
}
exports.displayDetails = displayDetails;
function showBalance() {
    if (exports.accountDetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please create an Account.");
        mainMenuOptions();
    }
    else {
        var tmpName = (0, readline_sync_1.question)("Please enter the Account Holder Name:");
        if (tmpName == exports.accountDetails.name) {
            console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.accountDetails.balance);
            mainMenuOptions();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "In correct Account Holder Name !");
            backOptons();
            var retry = !back;
            if (retry)
                showBalance();
            else
                mainMenuOptions();
        }
    }
}
exports.showBalance = showBalance;
function transaction() {
    if (exports.accountDetails.accountNumber == "") {
        console.log('\x1b[31m%s\x1b[0m', "No data found! Please create an Account.");
        mainMenuOptions();
    }
    else {
        transactionTypeOptions();
        var selected = (0, readline_sync_1.question)("Please type your answer(Type the letter specified after ur option):\n").toUpperCase();
        if (selected == "D") {
            deposit();
        }
        else if (selected == "W") {
            withdraw();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "Invalid Input!");
            transaction();
        }
    }
}
exports.transaction = transaction;
function deposit() {
    var accno = (0, readline_sync_1.question)("Please enter the Account Number:");
    if (accno == exports.accountDetails.accountNumber) {
        console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.accountDetails.balance);
        var amountDepositing = Number((0, readline_sync_1.question)("Please Enter the Amount to be deposited: "));
        exports.accountDetails.balance += amountDepositing;
        console.log('\x1b[32m%s\x1b[0m', "Deposit of " + amountDepositing + " is Successfull!");
        console.log('\x1b[33m%s\x1b[0m', "Available Balance: " + exports.accountDetails.balance);
        mainMenuOptions();
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
        backOptons();
        var retry = !back;
        if (retry)
            deposit();
        else
            mainMenuOptions();
    }
}
exports.deposit = deposit;
function withdraw() {
    var accno = (0, readline_sync_1.question)("Please enter the Account Number:");
    if (accno == exports.accountDetails.accountNumber) {
        console.log('\x1b[33m%s\x1b[0m', "Account Balance: " + exports.accountDetails.balance);
        if (exports.accountDetails.balance > exports.accountDetails.minimumBalance) {
            console.log('\x1b[33m%s\x1b[0m', "Withdrawble Balance: " + (exports.accountDetails.balance - exports.accountDetails.minimumBalance));
            withdrawAmount();
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "Not Eligible to withdraw as balance is less than Minimum balance");
            mainMenuOptions();
        }
    }
    else {
        console.log('\x1b[31m%s\x1b[0m', "In correct Account Number !");
        backOptons();
        var retry = !back;
        if (retry)
            withdraw();
        else
            mainMenuOptions();
    }
}
exports.withdraw = withdraw;
function withdrawAmount() {
    var amountWithdrawing = Number((0, readline_sync_1.question)("Please Enter the Amount to be withdraw: "));
    if (!validateWithdrawAmount(amountWithdrawing)) {
        console.log('\x1b[31m%s\x1b[0m', "Insufficient Amount! please enter the amount less than withdrawable amount ");
        backOptons();
        var retry = !back;
        if (retry)
            withdrawAmount();
        else
            mainMenuOptions();
    }
    else {
        exports.accountDetails.balance -= amountWithdrawing;
        console.log('\x1b[32m%s\x1b[0m', "Withdrawal of " + amountWithdrawing + " is Successfull!");
        console.log('\x1b[33m%s\x1b[0m', "Available Balance: " + exports.accountDetails.balance);
        mainMenuOptions();
    }
}
exports.withdrawAmount = withdrawAmount;
function validateWithdrawAmount(amountwithdrawing) {
    if (exports.accountDetails.balance - amountwithdrawing >= exports.accountDetails.minimumBalance) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateWithdrawAmount = validateWithdrawAmount;
