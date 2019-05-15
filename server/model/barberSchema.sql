DROP TABLE IF EXISTS barbers;

CREATE TABLE barbers(
   id serial primary key, 
   firstname varchar,
   lastname varchar,
   jobrole varchar,
   rating int,
   email text not null unique,
   sequence integer
 )