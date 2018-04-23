\c dogWellness
-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;

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
  user_id INT REFERENCES users (id)
);

