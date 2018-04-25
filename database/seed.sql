\c dogWellness

--create users

INSERT INTO users (userName, email, password_digest)
VALUES ('Danae', 'danae@hotmail.com'),
       ('Kate', 'kate@hotmail.com'),
       ('Whitney', 'Whitney@hotmail.com');


--create dogs

INSERT INTO dogs (dog_name, vet, weight, user_id)
VALUES ('kai',  'roger', 90, 1),
       ('lilly', 'anna', 75, 2),
       ('frankie', 'tom', 40, 3);


INSERT INTO medication (medications)
VALUES ('heartWorm')
