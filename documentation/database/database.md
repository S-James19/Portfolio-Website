## Database

### Basic Description

* MySQL relational database
* Used to store information on my projects for the portfolio
* Website uses project cards, which are dynamically generated from the database data
* Includes 2 tables:
	* Projects - Different projects that I have completed
	* Categories - What type of project is it?

### Diagram

The Projects table has a many-to-one relationship with the Categories table. One category can have many projects, where as a project can only have one category.

![](images/entity-relationship-diagram.png)


### Projects Table

* ProjectID
* ProjectTitle - Name of project
* ProjectDesc - Description of project
* ProjectDate - Date of project
* ProjectLink - Link to page of project
* ProjectImg - Image of project for cards
* ProjectCategoryIDFK - Category of project
* ProjectViews - How many views the project link page has recieved

### Categories

* CategoryID
* CategoryName - Name of category

### Queries Required in Code

* Access all data in Projects table
* Access 3 random records in Projects table
* Update ProjectViews record in Projects table

### Code Implementation

Here is the sql code that I used to create the tables in MySQL

![](images/code-implementation.png)

Whenever a user loads the projects.html/index.html pages, a request is sent to the server to access the pages.
Depending on the page, a function is run to access a specific query.
Then, the html page is dynamically created using database data to display cards.

![](images/code-implementation-2.png)

Login info to the database is stored in the code, using environment variables to protect the information on the local machine.

![](images/code-implementation-4.png)

Here is showing the three queries in code. Depending on the client's request, one of these functions is executed.

![](images/code-implementation-3.png)

The html for the projects.html/index.html is dynamically rendered, and the database information is filled in.

![](images/code-implementation-5.png)

Here's an example implementation for one of the pages, it includes the dynamically rendered html.

![](images/code-implementation-6.png)

As a result, cards are now being rendered to the user on the page.

![](images/working-implementation.png)






