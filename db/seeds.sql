USE clients_db;

INSERT INTO clients (client_name) VALUES ('Shawn');
INSERT INTO clients (client_name) VALUES ('tyler');
INSERT INTO sections (sectionValue, clientId) VALUES  (true, 1);
INSERT INTO sections (sectionValue, clientId) VALUES  (false, 2);
INSERT INTO links (linkName, sectionId) VALUES ('link1',1);
INSERT INTO links (linkName, sectionId) VALUES ('link2',2);

