# User Management Dashboard (MERN Stack)

A complete MERN (MongoDB, Express, React, Node.js) project to manage users with full CRUD operations, validations, and CSV export.

---

## 📋 Features

✅ Responsive dashboard UI  
✅ User Table with columns:
- ID
- First Name
- Last Name
- Email
- Phone
- Location
- Hobby
- Actions (Edit/Delete)

✅ Add User Modal
- Form validation
- Email format check
- Phone: exactly 10 digits
- Required First/Last Name

✅ Edit User
✅ Delete User
✅ MongoDB integration
✅ CSV export

---

## 🗂️ Project Structure

User-Management-Dashboard/
├── backend/ # Express + MongoDB API
└── frontend/ # React frontend using Vite

🚀 Getting Started
1️⃣ Clone the Repository

git clone https://github.com/your-username/User-Management-Dashboard.git
cd User-Management-Dashboard
2️⃣ Setup Backend
Go into the backend folder:


cd backend
Install dependencies:

npm install
Create a .env file in the backend folder with:

PORT=4000
MONGO_URI=your_mongodb_connection_string
Run the backend server:

npm run dev
✅ Backend API will be available at:
http://localhost:4000/api/users

3️⃣ Setup Frontend
Go into the frontend folder:


cd frontend
Install dependencies:

npm install
Create a .env file in the frontend folder with:


VITE_BASE_URL=http://localhost:4000/api
Start the React app:

npm run dev
✅ Frontend will run at:
http://localhost:5173 (or as shown in terminal)

📤 Deployment
Backend: Render

Frontend: Vercel

When deploying, update your frontend .env:

VITE_BASE_URL=https://your-deployed-backend-url/api
📥 CSV Export
Click the "Download CSV" button in the dashboard to export the current user list as a .csv file.
cd frontend
npm install

Create a .env file in the frontend folder:
VITE_BASE_URL=http://localhost:4000/api

Start the React app:
npm run dev

Frontend will run at: http://localhost:5173 (or as shown in terminal)


📤 Deployment
Backend: Render
Frontend:Vercel

Update VITE_BASE_URL in frontend .env to your deployed backend URL when deploying.


📥 CSV Export
Click "Download CSV" button to export current user list as .csv.
