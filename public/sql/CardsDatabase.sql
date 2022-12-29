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