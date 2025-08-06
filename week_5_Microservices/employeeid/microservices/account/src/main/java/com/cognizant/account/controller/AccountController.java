package com.cognizant.account.controller;


import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Account getAccountByNumber(@PathVariable String number) {
        return new Account("00987987973432", "savings", 234343);
    }

    // Inner class for account response
    static class Account {
        private String number;
        private String type;
        private int balance;

        public Account(String number, String type, int balance) {
            this.number = number;
            this.type = type;
            this.balance = balance;
        }
        public String getNumber() { return number; }
        public String getType() { return type; }
        public int getBalance() { return balance; }
    }
}
