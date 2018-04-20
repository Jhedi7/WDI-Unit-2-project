\c dogWellness

--create users

INSERT INTO users (userName, email, password_digest)
VALUES ('Danae', 'danae@hotmail.com'),
       ('Kate', 'kate@hotmail.com'),
       ('Whitney', 'Whitney@hotmail.com');


--create dogs

INSERT INTO dogs (dog_name, medication, vet, weight, user_id)
VALUES ('kai', 'heart worm', 'roger', 90, 1),
       ('lilly', 'joint', 'anna', 75, 2),
       ('frankie', 'worms', 'tom', 40, 3);
