
Project: Todo Task Web Application

Brief
-----
A lightweight full-stack Todo application for creating, editing, completing, and deleting tasks. Designed for interview/home-project usage with a simple code structure and easy local setup.

Key features
------------
- Create, edit, mark complete/incomplete, and delete tasks
- Persistent storage using MongoDB
- Minimal REST API for CRUD operations
- Client-side UI with responsive layout and accessibility considerations
- Basic input validation and error handling

Tech stack
----------
- Frontend: HTML, CSS, JavaScript (or framework of choice)
- Backend: Node.js + Express (or equivalent)
- Database: MongoDB
- Dev tools: npm/yarn, nodemon (optional), testing library (Jest/Mocha)

Getting started
---------------
Prerequisites:
- Node.js (LTS)
- npm or yarn
- MongoDB installed and running

Quick start:
1. Clone the repository
2. Install dependencies: `npm install` (or `yarn`)
3. Configure environment variables (see .env.example)
4. Start MongoDB service
5. Start the development server: `npm run dev` (or `npm start`)
6. Open the client at http://localhost:3000 (or configured port)

Configuration
-------------
- .env (example)
  - PORT=3000
  - MONGODB_URI=mongodb://localhost:27017/todo-app

API (example)
-------------
- GET /api/tasks        -> list all tasks
- POST /api/tasks       -> create a new task { title, description?, dueDate? }
- GET /api/tasks/:id    -> get single task
- PUT /api/tasks/:id    -> update task
- DELETE /api/tasks/:id -> remove task

Usage notes
-----------
- Input validation: tasks require a non-empty title.
- Completed tasks may include a timestamp or boolean flag.
- Consider optimistic UI updates for improved UX.

Project structure (example)
---------------------------
- /src
  - /client      -> frontend code
  - /server      -> backend API
  - /models      -> MongoDB schemas
  
- .env.example
- package.json
- README.md



