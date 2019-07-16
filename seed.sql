CREATE DATABASE Ppamazon_DB;

USE Ppamazon_DB;

CREATE TABLE products (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    department VARCHAR(20) NOT NULL,
    price FLOAT(6, 2) NOT NULL,
    stock INT(6) NOT NULL,
    sales FLOAT(11, 2),
    PRIMARY KEY (id)
);

INSERT INTO products (name, department, price, stock)
VALUES  ("Playstation 4", "Electronics", 249.99, 50),
		("Nintendo Switch", "Electronics", 299.99, 10),
		("Tool - Lateralus Vinyl Record", "Music", 29.99, 2),
		("Aesop Rock - Skelethon Digital Download", "Music", 11.99, 999999),
        ("Kingdom Hearts 2 - PS2", "Games", 14.99, 30),
        ("God of War - PS4", "Games", 59.99, 100),
        ("Permaculture Designer's Manual by Bill Mollison", "Books", 19.99, 15),
        ("One Piece Volume 89", "Books", 9.99, 40),
        ("Full Set Bath Towels", "Home", 11.99, 20),
        ("Memory Foam Mattress", "Home", 649.99, 5);
        
UPDATE products SET sales = 0 WHERE id > 0;



CREATE TABLE departments (
	id INTEGER(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    overhead FLOAT(11, 2),
    PRIMARY KEY (id)
);

INSERT INTO departments (name, overhead)
VALUES  ("Electronics", 1000),
		("Music", 500),
        ("Games", 600),
        ("Books", 800),
        ("Home", 1200);