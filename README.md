# BudgetApp
The BudgetApp is basically a back-end (in Node.js) & front-end (in React) Application for Budget Management, in which We've added the Login, Logout and Authentication modules in addition back-end requests for Create, Update, View, Delete Incomes and Expenses and users can get total Income & Expenses.


# Table of Contents
1. [Authors and Contributors](#author)
2. [How to deploy the app?](#deploy-app)
3. [Resources Used](#resources)
4. [Goals](#future-improvements)

### <a name="author"></a>1. Authors and Contributors

I, [Devashish Patel](https://github.com/Devashish2910) and [Abhishek Ghosh](https://github.com/ghoshabhi) are the developers for this Application.

### <a name="deploy-app"></a>2. How to check the app ?
Follow the steps below to check back-end API :

-  Postman Collection Link : https://www.getpostman.com/collections/2250806e9bda9762ee18
- URL - https://budgetapp-api.herokuapp.com
(Only Create User and Login, these two requests don't require authentication, all other requests require authentication.)

### Request Routes:
 **Create User**
  - Type: POST
  - Endpoint: URL/budget/users/signup
  - Body: `{
	           "email": "xyz@gmail.com",
	           "password": "xyz"
            }`
  (Minimum password length is 5)

 **User Login**
  - Type: POST
  - Endpoint: URL/budget/users/login
  - Body: `{
	           "email": "xyz@gmail.com",
	           "password": "xyz"
            }`
  - Response Header: Copy value of key `auth` which will be used for authentication and set this value in environment with the key `Authorization` and set that key in header of all other requests from now.

 **New Entry**
  - Type: POST
  - Endpoint: URL/budget/add
  - Request Body: `{
	                   "type": "Income",
	                   "description": "First Income",
	                   "amount": 400
                  }`
  - Request Header: `Authorization: JWT token value(From Response Header find 'auth')`

 **Fetch All Data**
 - Type: GET
 - Endpoint: URL/budget/all
 - (Set Request Header)

 **Fetch Individual Income**
 - Type: GET
 - Endpoint: URL/budget/income/:id (e.g: id -> `5969902e3989c2063b925d4a`)
 - (Set Request Header)

 **Fetch Individual Expense**
  - Type: GET
  - Endpoint: URL/budget/expense/:id (e.g: id -> `5969902e3989c2063b925d4a`)
  - (Set Request Header)

 **Update Individual Income**
 - Type: PUT
 - Endpoint: URL/budget/income/:id (e.g: id -> `5969902e3989c2063b925d4a`)
 - (Set Request Header)

 **Update Individual Expense**
  - Type: PUT
  - Endpoint: URL/budget/expense/:id (e.g: id -> `5969902e3989c2063b925d4a`)
  - (Set Request Header)

 **Delete Individual Income**
 - Type: DELETE
 - Endpoint: URL/budget/income/:id (e.g: id -> `5969902e3989c2063b925d4a`)
 - (Set Request Header)

 **Delete Individual Expense**
  - Type: DELETE
  - Endpoint: URL/budget/expense/:id (e.g: id -> `5969902e3989c2063b925d4a`)
  - (Set Request Header)

 **USER LOGOUT**
 - Type: DELETE
 - Endpoint: URL/budget/users/logout
 - (Set Request Header)
`




### <a name="resources"></a> 3. Resources

* Node.js is used as the scripting language for the server.
* `npm` modules used in the API.
 * `express`, `crypto-js`, `bcryptjs`, `underscore`, `body-parser`,`JWT`,`mongoose`
* Database : MongoDB

### <a name="future-improvements"></a> 4. Goals
* [X] Create a back-end API with Node.js
* [X] Use MongoDB as a No Sql Database
* Give a attaractive front-end look with React
* Develop a mobile app using React native

_Any suggestions for the API are welcomed. Please email me at devashish2910@gmail.com to share your suggestions_
