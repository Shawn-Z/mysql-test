CREATE DATABASE clients_db;
USE clients_db;

DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS links;

CREATE TABLE clients(
    clientId INT AUTO_INCREMENT PRIMARY KEY,
    client_name varchar(255) NOT NULL
)ENGINE=INNODB;

CREATE TABLE sections(
    sectionId INT AUTO_INCREMENT PRIMARY KEY,
    sectionValue varchar(255) NOT NULL,
    clientId INT,
    CONSTRAINT in_client
    FOREIGN KEY (clientId) 
        REFERENCES clients(clientId)
        ON UPDATE SET NULL
        ON DELETE SET NULL 
)ENGINE=INNODB;

CREATE TABLE links(
    linkId INT AUTO_INCREMENT PRIMARY KEY,
    linkName varchar(100) not null,
    sectionId INT,
    CONSTRAINT in_section
    FOREIGN KEY (sectionId) 
        REFERENCES sections(sectionId)
        ON UPDATE SET NULL
        ON DELETE SET NULL 
)ENGINE=INNODB;




INSERT INTO clients(client_name)
VALUES
    ('first client'),
    ('second client');
    
INSERT INTO sections(sectionValue, clientId)
VALUES
    ('sections2', 1), 
    ('sections2',2);
    
INSERT INTO links(linkName, sectionId)
VALUES
('link1',1),
('link2',2);
    

SELECT * FROM clients;