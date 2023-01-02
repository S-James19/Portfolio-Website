-- create table to store project categories
CREATE TABLE Categories( 
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(255),
    PRIMARY KEY (CategoryID)
);
-- create table to store individual projects
-- @block
CREATE TABLE Projects(
    ProjectID INT NOT NULL AUTO_INCREMENT,
    ProjectTitle VARCHAR(255),
    ProjectDesc VARCHAR(255),
    ProjectLink VARCHAR(255),
    ProjectImg VARCHAR(255),
    ProjectDate DATETIME,
    ProjectCategoryIDFK INT,
    ProjectViews INT,
    PRIMARY KEY (ProjectID),
    FOREIGN KEY (ProjectCategoryIDFK) REFERENCES Categories(CategoryID)
);

-- add fields to categories
-- @block
INSERT INTO Categories(CategoryName)
VALUES
    ("Web"),("Game"),("Mobile");

-- add Operation Extermination to projects database
-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Operation Extermination", "A first person, local co-op shooter video game, developed over a 6-month period, using Unity, C# and more technologies.", 
"operation-extermination.html", "../../images/operation-extermination.png", "2022-05-10", 2, 0);

-- add Insect Infinite Runner to projects database
-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Insect Infinite Runner", "Insect Infinite Runner is a first person infinite runner game, developed over a 5-month period, using Unity, C#, C++ and more technologies.", 
"infinite-insect-runner.html", "../../images/insect.jpg", "2022-05-10", 2, 0);

-- add Portfolio website to projects database
-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Portfolio Website", "My portfolio website, developed over a 3-month period, using HTML, CSS, JavaScript and more technologies.", 
"portfolio.html", "../../images/website.png", "2023-01-04", 1, 0);

-- select all fields in projects database
-- @block 
SELECT * FROM PROJECTS;

-- select all fields in categories database
-- @block 
SELECT * FROM categories;
