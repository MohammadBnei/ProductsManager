CREATE TABLE Restaurant (
    id INT NOT NULL PRIMARY KEY,
    address VARCHAR(255)
);

CREATE TABLE Product (
    id INT NOT NULL PRIMARY KEY,
    visibility BOOLEAN,
    price FLOAT,
    restaurantId INT,
    FOREIGN KEY (restaurantId) REFERENCES Restaurants(id)
);

CREATE TABLE Info (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    language VARCHAR(5) NOT NULL,
    restaurantId INT,
    FOREIGN KEY (restaurantId) REFERENCES Restaurants(id),
    productId INT,
    FOREIGN KEY (productId) REFERENCES Products(id)
);
