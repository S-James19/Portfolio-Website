CREATE TABLE Categories(
    CategoryID INT NOT NULL AUTO_INCREMENT,
    CategoryName VARCHAR(255),
    PRIMARY KEY (CategoryID)
);

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

-- @block
INSERT INTO Categories(CategoryName)
VALUES
    ("Web"),("Game"),("Mobile");

-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Operation Extermination", "Operation Extermination is a first-person shooter, local-coop game that I developed in a team of 8 members over 6 months, using Unity and C# technologies.", 
"exampleLink", "exampleLink", "2022-05-10", 2, 0);

-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Insect Infinite Runner", "Insect Infinite Runner is a first person infinite runner game solo project developed over 5 months, using Unity, C#, C++ and Arduino technologies.", 
"exampleLink", "exampleLink", "2022-05-10", 2, 0);

-- @block 
INSERT INTO Projects(ProjectTitle, ProjectDesc, ProjectLink, ProjectImg, ProjectDate, ProjectCategoryIDFK, ProjectViews)
VALUES 
("Portfolio Website", "My portfolio website, developed over 3 months, using HTML, CSS, JavaScript and more technologies", 
"exampleLink", "exampleLink", "2023-01-04", 1, 0);

-- @block 
SELECT * FROM PROJECTS;

-- @block 
ALTER TABLE Projects
MODIFY COLUMN ProjectDate DATE;

-- @block
UPDATE projects
SET ProjectDate = "2022-05-10"
WHERE ProjectID = 1;
-- @block
UPDATE projects
SET ProjectDate = "2022-05-10"
WHERE ProjectID = 2;
-- @block
UPDATE projects
SET ProjectDate = "2023-01-04"
WHERE ProjectID = 3;

-- @block
ALTER TABLE projects
DROP COLUMN ProjectDate;

-- @block
ALTER TABLE projects
ADD COLUMN ProjectDate DATE AFTER ProjectDesc;

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
