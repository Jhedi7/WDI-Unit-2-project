\c dogWellness
-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS students CASCADE;

-- add create tables here
CREATE TABLE users (
id SERIAL PRIMARY KEY,
userName VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password_digest VARCHAR(255)
);

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR(255),
  medication VARCHAR(255),
  vet VARCHAR(255),
  weight INT,
  user_id INT NOT NULL REFERENCES users (id)
);

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) UNIQUE NOT NULL,
--   password_digest TEXT NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   firstname VARCHAR(255),
--   lastname VARCHAR(255),
--   avatar TEXT,
--   date_created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     uname VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password_digest VARCHAR(255)
-- );
