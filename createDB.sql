CREATE TABLE Restaurants (
    id INT NOT NULL PRIMARY KEY,
    address VARCHAR(255)
);

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY,
    visibility BOOLEAN,
    price FLOAT,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id)
);

CREATE TABLE Info (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    language VARCHAR(5) NOT NULL,
    restaurant_id INT,
    FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id),
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES Products(id)
);
