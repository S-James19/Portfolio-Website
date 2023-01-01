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
("Operation Extermination", "Operation Extermination is a first-person shooter, local-coop game that I developed in a team of 8 members over 6 months, using Unity and C# technologies.", 
"exampleLink", "exampleLink", "2022-05-10", 2, 0);

-- add Insect Infinite Runner to projects database
-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Insect Infinite Runner", "Insect Infinite Runner is a first person infinite runner game solo project developed over 5 months, using Unity, C#, C++ and Arduino technologies.", 
"exampleLink", "exampleLink", "2022-05-10", 2, 0);

-- add Portfolio website to projects database
-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Portfolio Website", "My portfolio website, developed over 3 months, using HTML, CSS, JavaScript and more technologies", 
"exampleLink", "exampleLink", "2023-01-04", 1, 0);

-- select all fields in projects database
-- @block 
SELECT * FROM PROJECTS;

-- select all fields in categories database
-- @block 
SELECT * FROM categories;

-- Update date fields in projects database
-- @block
UPDATE projects
SET ProjectDate = "10 May 22"
WHERE ProjectID = 1;
-- @block
UPDATE projects
SET ProjectDate = "10 May 22"
WHERE ProjectID = 2;
-- @block
UPDATE projects
SET ProjectDate = "4 Jan 23"
WHERE ProjectID = 3;

-- add image links to projects database

-- @block
UPDATE projects
SET ProjectImg = "../../images/placeholder.jpg"
WHERE ProjectID = 1 OR 2 OR 3;

-- @block
UPDATE projects
SET ProjectImg = "../../images/website.png"
WHERE ProjectID = 3;

-- @block
UPDATE projects
SET ProjectImg = "../../images/insect.jpg"
WHERE ProjectID = 2;

-- @block
UPDATE projects
SET ProjectImg = "../../images/operation-extermination.png"
WHERE ProjectID = 1;

-- add project page links to projects database
-- @block
UPDATE projects
SET ProjectLink = "operation-extermination.html"
WHERE ProjectID = 1;

UPDATE projects
SET ProjectLink = "infinite-insect-runner.html"
WHERE ProjectID = 2;

UPDATE projects
SET ProjectLink = "portfolio.html"
WHERE ProjectID = 3;

