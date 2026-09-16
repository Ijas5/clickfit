CREATE DATABASE click_fit;

USE click_fit;


CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(50),
    active BOOLEAN DEFAULT TRUE
);


DELIMITER //

CREATE PROCEDURE addUser(
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(255),
    IN p_type VARCHAR(50),
    IN p_active BOOLEAN
)
BEGIN

    INSERT INTO users (
        email,
        password,
        type,
        active
    )
    VALUES (
        p_email,
        p_password,
        p_type,
        p_active
    );

END //

DELIMITER ;


CALL addUser(
    'test@example.com',
    '123456',
    'user',
    TRUE
);


SELECT * FROM users;