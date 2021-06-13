CREATE DATABASE mgmt;

CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email TEXT
);

INSERT INTO employees(name, email)
    VALUES ('john','john@tls.com')
            ('ryan','ryan@tls.com')

CREATE TABLE department(
    id SERIAL FOREIGN KEY,
    work VARCHAR(30) 
)

INSERT INTO department(role)
    VALUES('marketing')
            ('business')
