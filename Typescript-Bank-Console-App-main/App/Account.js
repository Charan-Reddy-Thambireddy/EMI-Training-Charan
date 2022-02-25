"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
        this.name = "";
        this.age = 0;
        this.accountNumber = "";
        this.location = "";
        this.state = "";
        this.country = "";
        this.emailID = "";
        this.balance = 0;
        this.minimumBalance = 0;
        /*GenerateAccountNumber():string{
            
            return 'XYZ'+Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        }*/
    }
    return Account;
}());
exports.Account = Account;
