"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var Enum_AccountType_1 = require("./Enum.AccountType");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super.call(this) || this;
        _this.minimumBalance = 500;
        _this.balance = 500;
        _this.accountType = Enum_AccountType_1.Accountype.Savings;
        _this.accountNumber = 'Sav' + Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
        return _this;
    }
    return SavingsAccount;
}(Account_1.Account));
exports.SavingsAccount = SavingsAccount;
