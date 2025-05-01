CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,  -- This automatically creates an index
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

INSERT INTO users VALUES (1, 'test.username', 'nikola@dev.mk')

CREATE INDEX idx_users_email ON users(email)

SELECT * FROM users
WHERE email = 'nikola@dev.mk'


-- Partial Index

CREATE INDEX idx_active_users
ON users(username)
WHERE is_active = true;



