"use strict";
var BankWallet = artifacts.require("./BankWallet.sol");

contract('BankWallet', function(accounts) {

    var bankWallet;
     

    before(async () => 
        {
            bankWallet      = await BankWallet.deployed();
        });


    it ("Test Case -1 : Deposit & Withdraw Tests", async function()
        { 

            let depositAmount = 1000

            await bankWallet.Deposit(depositAmount, {from:accounts[0]});
            let balance = await bankWallet.GetBalance({from:accounts[0]});
            assert.equal(balance, depositAmount)

            await bankWallet.Withdraw(depositAmount - 100, {from:accounts[0]});

            let balance2 = await bankWallet.GetBalance({from:accounts[0]});
            assert.equal(balance2, 100)

        });
});