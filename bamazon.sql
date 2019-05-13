DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook pro", "Electronics", 800, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rice", "food", 19.55, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tylenol", "Drugs", 22.68, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cantu-oil", "Hair-products", 14.20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fillet-Mignon", "food", 9.99, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mac", "Cosmetics", 35.69, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tom-ford: Black Orchid", "Perfume", 225, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jasmine rice", "food", 19.55, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike: Air Force One", "Shoe", 100, 53);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-Box", "Electronics", 400, 3);