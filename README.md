# To-Do List Web App

This project focuses on building and deploying a full-stack To-Do List web application using React.js for the frontend and Node.js with Express and MongoDB for the backend. With this application, users can create tasks, assign priorities to each task, and update the task status.  

## Table of Contents

- [Built With](#built-with)
- [Getting Started] (#getting-started)
  - [Codesandbox Setup](#codesandbox-setup)
  - [Local Setup (Optional)](#local-setup-optional)

## Built With

- Frontend: React.js

- Backend: Node.js, Express.js

- Database: MongoDB

## Getting Started

### Codesandbox Setup

To explore and run this project in Codesandbox:

1.  **Go to the Codesandbox link:** [Link: https://codesandbox.io/p/sandbox/todofrontend-qhp7wl]
2.  **Fork the sandbox (if needed):** If you want to make changes, you can fork the sandbox to your own Codesandbox account.

### Local Setup (Optional)

If you prefer to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/i-midhunbabu/todoFrontend.git 
    ```

2.  **Install dependencies:**
    ```bash
    cd todoFrontend
    npm install 
    ```
    (Or use `yarn install` if you prefer yarn)

3.  **Set up MongoDB Atlas:**
    *   Create a free MongoDB Atlas account if you don't have one: [Link: MongoDB Atlas https://www.mongodb.com/cloud/atlas]
    *   Obtain your connection string and replace the placeholder in your backend configuration (e.g., in a `.env` file).

4.  **Set up environment variables:**
    *   Create a `.env` file in the appropriate directory (e.g., in your backend folder).
    *   Add your MongoDB Atlas connection string (e.g., `ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>.<projectId>.mongodb.net/database-name?retryWrites=true&w=majority`)
    *   Add any other required environment variables (e.g., `PORT=8080` for your backend server).
  
5.  **Run the project:**
    *   Start the backend server:
        ```bash
        cd backend
        npm start # or node index.js 
        ```
    *   Start the frontend server:
        ```bash
        cd frontend
        npm start 
        ```
  
## Deployment
The developed frontend and backend are deployed on Render (https://render.com/).

Deployment Link (Backend): https://todobackend-z5k0.onrender.com

Deployment Link (Frontend): https://todofrontend-zkwn.onrender.com

## Screenshots

![Screenshot 2025-07-03 234627](https://github.com/user-attachments/assets/b0c110a1-e450-4536-9371-be3c18c5ead3)

![Screenshot 2025-07-03 234507](https://github.com/user-attachments/assets/19c34ca2-6051-4db4-a233-c3e9017c2040)

![Screenshot 2025-07-03 234609](https://github.com/user-attachments/assets/289b7591-4f48-44e3-b00f-e3266c245207)




