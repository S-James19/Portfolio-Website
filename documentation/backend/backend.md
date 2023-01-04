## Backend

### Website Requirements

For developing the site, I needed to define the requirements, they were as follows:

* 4 web pages
	*Home, 
	*About me 
	*Projects 
	*Contact
* Database
	* Store project information to be displayed on cards.
* Mail functionality
	* Send email from form on contact page

### Data Flow

![](images/mvc-diagram)

* The client will send a HTTP request to the server, to get or pass data.
* An API will access this request, and pass on the relevant data to the required scripts.
* These scripts will do their functionality, e.g. database script to access database via queries and connection.
* The scripts will return the data/status code of action back to the API controller.
* The API controller will update the view with the data/status code.
* The API controller will then return the requested data/status code back to client.

### Technologies Used

To implement the designs, I used the following technologies:

* Node.js - Environment to run JavaScipt on server.
* Express.js - To build RESTful API controller.
* MYSql - To store projects data.

### Implementation

* Server.js script.
	* Sets up Express.js application.
	* Adds middleware functionality to application.
	* Sets view engine for rendering dynamic HTML.
	* Opens port for connection.

![](images/server)

* Router.js script **CONTROLLER / MODEL**
	* The REST API for the backend server.
	* Sets up router for recieving client requests.
	* Accesses Model scripts depending on requests.
	* Communicates with view via 'res.Send', 'res.SendFile' and 'res.Render' methods.


**Example from code**
![](images/router)

* Database.js script **MODEL**
	* Creating connection pool between server and database.
	* Recieve requests from Router.js.
	* Run specific query based on request to access / update specific data.
	* Return data / response.

![](images/connection)
![](images/database)
