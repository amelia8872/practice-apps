CREATE DATABASE checkout;

USE checkout;

CREATE TABLE payments (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  address_line1 varchar(255),
  address_line2 varchar(255),
  city varchar(255),
  state varchar(255),
  zipcode varchar(255),
  phone_number varchar(255),
  creditcard int,
  expirydate int,
  cvv int,
  billingzip int
);