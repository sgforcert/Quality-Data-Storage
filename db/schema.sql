DROP DATABASE IF EXISTS audit_db;
-- Creates the "audit_db" database --
CREATE DATABASE audit_db;

-- Makes it so all of the following code will affect audit_db --
\c audit_db;

-- Creates the table "produce" within audit_db --
CREATE TABLE machines (
  -- Creates a numeric column called "id" --
  id INTEGER PRIMARY KEY, 

                      -- id  SERIAL PRIMARY KEY,

  -- Creates a string column called "machine_name" which can hold up to 1 character --
  machine_name VARCHAR(1) NOT NULL,

  -- Creates a string column called "machine_registration_date" which can hold up to 10 character --
  machine_registration_date VARCHAR(10) NOT NULL,,
);

-- Creates the table "samples" within audit_db --
CREATE TABLE samples (
  -- Creates a numeric column called "id" --
  id INTEGER PRIMARY KEY,
  -- Creates a string column called "sample_name" which can hold up to 50 character --
  sample_name VARCHAR(50) NOT NULL,,
  -- Creates a connection with machines table using foreign key (machine id) --
  machine_id INTEGER,
  FOREIGN KEY (machine_id)
  REFERENCES machines(id)
  ON DELETE SET NULL
);