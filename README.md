
# RESALESHACK:

## TO RUN THE WEB APP:

**A) Goto https://resaleshackf.herokuapp.com/** \
    
 # TO RUN ON YOUR LOCAL MACHINE:
 
 **A) Clone this repository on your local machine.**\
 **B) Install Node.js and npm on your machine from here ( https://nodejs.org/en/download/ ).
    Check for the succesfull installation using the command -> node -v and npm -v.** \
 **C) Open command prompt and change the directory to the cloned directory and run command -> npm install.** \
 **D) Update the .env file ** \
 **D) Use command -> node app.js to start the server.** \
 **E) Open your favourite browser and goto http://localhost:8000/.** \
 **F) Repeat steps B,C,D as above from the previous section.** \
 



# Project Description
### Category
A Web Application
### Purpose
The purpose of this application is to help students buy and sell products within their campus at
ease; it is an online marketplace that helps students buy and sell second-hand products without
any hassle.
### Scope
Creating an online platform makes it easier for students to connect and find the right person who
could help them. The scope of an online marketplace is huge because every year new students are
enrolled into an institute, in turn increasing the need for such software. Convenience and quickness
are the most impressive advantages of the system. By reselling, it promotes the idea of reusability
and reduction of unnecessary items.
### Introduction
#### Proposed System
1. `Student Registration`: Students should register using the institute e-mail ID so that we can
verify.
2. `Select their role`: They can either put up an ad to sell a product or browse through the
existing ads.
3. `Search bar`: Once a student starts looking for a particular product, we provide them with
various filter options to specify their exact requirements.
4. `Categories`: We will include various categories from which they can choose
5. `Dashboard`: If a person wants to sell a product, they’ll have their dashboard, which has a
record of their previous and current ads; they can edit them according to their requirement.
6. `Ad Card`: It displays a brief description of the product while searching; one can click on it to
know more.
#### Advantages for Sellers
1. Easy to find prospective leads.
2. They are earning money by getting rid of the things they don’t need.
3. Zero shipping cost/tax of any sort, as the transaction, happens within the campus.
Advantages for Buyers
1. Buyers don’t have to spend a hefty amount of money to buy new things they only require for
a few years.
2. Getting access to reliable sellers as they are their seniors or batch mates.
3. Flexibility to verify the durability of the product by checking it then and there.
### Functional Requirements
1. All the products will be listed to be viewed in form of ***cards*** displaying the
picture, price, short description, the room number of the seller, days posted ago.
2. Users will be able to choose between the categories of the products listed the via **category**
***bar***.
3. Users will be able to search for products via the ***search bar***.
4. To become a seller, the user will be able to ***sign up*** with an email registered with the
college. A verification system will verify the student.
5. The seller must provide name, roll number, batch, phone number, registered email address,
and password during the signup up process.
6. Registered users will be able to ***upload ads*** for their products via a form having inputs for
 title, category, description, photos, and videos.
7. Registered users will be able to ***view, edit, delete*** all their listed product ads in a
dashboard .
8. A buyer can ***report an ad*** if they find it suspicious or fake. The administrators will then
access the reported ads and ***delete*** or ***discard*** them.
### Non-Functional Requirements
1. 24*7 availability
2. Secure access to consumers’ confidential data.
3. Better component design so that it is easy to identify any error if occurs or make required
changes.
4. Password encryption.
### Software Tools
Database Server: MongoDB/Firebase
Client: Any Web browser
Development Tools: VS Code, Postman , Robo3T 
Programming Languages: Javascript, HTML, CSS
Frontend: React.js, Bootstrap
Backend: Node.js, Express.js
Deployment
Operating System Server: Windows, Linux, Mac


## Folder Structure:
`Frontend`:
`src` - Root folder for the frontend
`src/admin` - All the components for Dashboards
`src/admin/helper` 
`adminapicall.js` - API calls for managing products
`src/admin/`
	`AddCategory.js` - Component to add category in DB
	`AddProduct.js` - Component to add Product in DB
	`ManageProduct.js` - Component to manage Products in DB (VIEW/UPDATE/DELETE)
	`ManageReviewProducts.js` - Component to render dashboard to manage reported ads
    `ManageUserProducts.js` - Component to manage ads published by a user
    `UpdateAd.js` - Component to display a form to update a particular ad
`src/auth/helper` - contains components that contain routes accessible to users and admins
`src/auth/helper/`
`AdminRoute.js` - Routes accessible by signed in users that has role set to 1 (ADMIN)
`Index.js` - Helper to make api calls to the backend for signup, signin and signout
`PrivateRoute.js` - Routes accessible by signed in users
`src/core` - Contains components related to the pages and features visible to the user
    `src/core/helper` - Contains API calls for the core components
    `src/core/helper/`
        `coreapicalls.js` - API calls for core components
        `ImageHelper.js` - It calls the api to get the image
