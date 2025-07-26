CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
); 
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

--Scenario 1 : 
BEGIN
    FOR rec IN (
        SELECT c.CustomerID, 
               TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB)/12) AS Age,
               l.LoanID
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    ) LOOP
        IF rec.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = rec.LoanID;
        END IF;
    END LOOP;

    COMMIT;
END;

SELECT l.LoanID, c.Name, l.InterestRate
FROM Loans l
JOIN Customers c ON l.CustomerID = c.CustomerID;

--Scenario 2 :

ALTER TABLE Customers ADD IsVIP VARCHAR2(5) DEFAULT 'FALSE';

BEGIN
    FOR rec IN (
        SELECT CustomerID, Balance FROM Customers
    ) LOOP
        IF rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = rec.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;

SELECT CustomerID, Name, Balance, IsVIP
FROM Customers
WHERE IsVIP = 'TRUE';

SET SERVEROUTPUT ON;


--Scenario 3 :

BEGIN
    FOR rec IN (
        SELECT c.Name, l.LoanID, l.EndDate
        FROM Loans l
        JOIN Customers c ON c.CustomerID = l.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID ||
                             ' for customer ' || rec.Name ||
                             ' is due on ' || TO_CHAR(rec.EndDate, 'DD-MON-YYYY'));
    END LOOP;
END;


--Excersize 3 :
--Scenario 1:
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR rec IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    ) LOOP
        UPDATE Accounts
        SET Balance = Balance + (rec.Balance * 0.01),  -- 1% interest
            LastModified = SYSDATE
        WHERE AccountID = rec.AccountID;
    END LOOP;

    COMMIT;
END;


BEGIN
    ProcessMonthlyInterest;
END;

SELECT AccountID, AccountType, Balance
FROM Accounts
WHERE AccountType = 'Savings';

--Scenario 2:
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;

    COMMIT;
END;


BEGIN
    UpdateEmployeeBonus('IT', 10);
END;


SELECT EmployeeID, Name, Department, Salary
FROM Employees
WHERE Department = 'IT';

--Scenario 3:
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    insufficient_balance EXCEPTION;
BEGIN
    DECLARE
        from_balance NUMBER;
    BEGIN
        SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_account;

        IF from_balance < amount THEN
            RAISE insufficient_balance;
        END IF;

        UPDATE Accounts
        SET Balance = Balance - amount,
            LastModified = SYSDATE
        WHERE AccountID = from_account;

        UPDATE Accounts
        SET Balance = Balance + amount,
            LastModified = SYSDATE
        WHERE AccountID = to_account;

        COMMIT;
    EXCEPTION
        WHEN insufficient_balance THEN
            DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient funds in account ' || from_account);
    END;
END;



BEGIN
    TransferFunds(1, 2, 200);
END;



SELECT AccountID, Balance
FROM Accounts
WHERE AccountID IN (1, 2);
