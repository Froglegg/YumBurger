### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	chirp varchar(255) NOT NULL,
	chirpTime datetime NOT NULL default CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
