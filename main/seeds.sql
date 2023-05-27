
INSERT INTO departments (name)
VALUES ("zoology"),("ufology"),("astronomy");

INSERT INTO roles (title, salary, department_id)
VALUES ("Director of Zoology", 150000, 1), ("Veterinarian", 125000, 1), ("ufologist", 40000, 2), ("Astrologist", 60000, 3), ("Planetary Physicist", 10000, 3);


INSERT INTO employees (firstName, lastName, role_id, manager_id)
VALUES ("Lisa", "Lopez", 1, null), ("Rozonda", "Thomas", 2, 1), ("Tionne", "Watkins", 3, 1);


