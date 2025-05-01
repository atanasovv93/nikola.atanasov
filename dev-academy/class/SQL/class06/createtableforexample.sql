-- Create tables for our examples
CREATE TABLE bank_accounts (
    account_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    balance DECIMAL(10,2) NOT NULL DEFAULT 0,
    last_transaction_date TIMESTAMP
);
 
CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    from_account_id INTEGER,
    to_account_id INTEGER,
    amount DECIMAL(10,2),
    transaction_type VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
-- Insert sample data
INSERT INTO bank_accounts (user_id, balance) VALUES
(1, 1000),
(2, 500),
(3, 2000),
(4, 750),
(5, 3000),
(6, 1500),
(7, 2500),
(8, 100);

-- Basic Transaction
-- Transfer money from one to other person ( betweeen 2 accounts )


BEGIN;

IF NOT EXISTS (
SELECT 1 FROM bank_accounts
WHERE account_id = 2 AND balance >= 500
) THEN
ROLLBACK;
RAISE EXCEPTION 'Insufficient funds';
END IF;
UPDATE bank_accounts
SET balance = balance - 100,
    last_transaction_date = CURRENT_TIMESTAMP
WHERE account_id = 1;

UPDATE bank_accounts
SET balance = balance + 100,
    last_transaction_date = CURRENT_TIMESTAMP
WHERE account_id = 2;

INSERT INTO transactions
    (from_account_id, to_account_id, amount, transaction_type)
VALUES
    (1, 2, 100, 'transfer');

COMMIT;

SELECT * FROM bank_accounts WHERE account_id = 1;


ROLLBACK;
