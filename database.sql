-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "shopping_list"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80),
"quantity" FLOAT,
"unit" VARCHAR(20),
"isPurchased" BOOLEAN DEFAULT false
);

INSERT INTO "shopping_list"(
"name",
"quantity" ,
"unit",
"isPurchased")

VALUES ('milk', 1, 'gallon', false);