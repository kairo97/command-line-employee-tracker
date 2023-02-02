USE company_db;
INSERT INTO department(name)
VALUES 
('UI/UX'),
('3D rendering'),
('frontend development'),
('backend development'),
('writing'),
('IT'),
('hardware development');

INSERT INTO role(title, salary, department_id)
VALUES
('UX designer', 90000, 1),
('UI designer', 90000, 1),
('UX researcher', 85000, 1),
('3D modeling artist', 85000, 2),
('Senior JavaScript developer', 120000, 3),
('Junior JavaScript developer', 69114, 3),
('Senior Python developer', 144000, 4),
('Junior Python developer', 88636, 4),
('Senior Technical writer', 86000, 5),
('IT specialist', 62000, 6),
('hardware development engineer', 119370, 7);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
('Rafael', 'Ninja-Turtle', 1, 1),
('Michaelangelo', 'Ninja-Turtle', 2, 1),
('Leonardo', 'Ninja-Turtle', 2, 1),
('Donatello', 'Ninja-Turtle', 3, 1),
('Casey', 'Jones', 4, 2),
('Splinter', 'Rat', 5, 3),
("April", "O'neil", 6, 3),
('Super', 'Shredder', 7, 4),
('Rock', 'Steady', 8, 4),
('Bee', 'Bop', 8, 4),
('Krang', 'Krang', 9, 5),
('Baxter', 'Stockman', 10, 6);



