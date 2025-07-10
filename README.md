
# Uber Clone – Ride Booking Platform

This is a full-stack Uber-like ride booking web application with **User** and **Rider** modules. The project contains two parts:
- **Frontend** – Built with React
- **Backend** – Built with Node.js and Express

---

## 📋 Modules Overview

### 👤 User Module
- **Register**: Create an account with name, email, and password.
- **Login**: Access account via registered credentials.
- **Book a Ride**:
  - Choose pickup and drop location.
  - See list of available riders (drivers).
  - Submit ride request and wait for confirmation.

### 🚗 Rider Module
- **Register**: Create an account with the following details:
  - Name, email, password
  - Vehicle number
  - Vehicle type (e.g., Sedan, SUV)
  - Color and capacity
- **Login**: Access rider dashboard.
- **View Ride Requests**:
  - See incoming ride requests from users.
  - Confirm a ride from the list.

---

## 🚀 How to Run the Project

### 📁 Folder Structure

The repository contains two main directories:
```
/uber
  ├── /frontend  → React frontend app
  └── /backend   → Node.js + Express backend server
```

### ⚙️ Prerequisites

- Node.js (v14 or above)
- npm or yarn
- MongoDB or preferred database (if implemented)

---

### 🖥️ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Runs the frontend app at [http://localhost:3000](http://localhost:3000)

---

### 🛠️ Backend Setup (Node.js + Express)

```bash
cd backend
npm install
npm run dev
```

Backend server runs at [http://localhost:5000](http://localhost:5000)

---

## 🧠 Features Summary

| Feature              | User | Rider |
|----------------------|------|--------|
| Register/Login       | ✅   | ✅     |
| Ride Booking         | ✅   |        |
| View Available Rides |      | ✅     |
| Confirm Ride         |      | ✅     |
| Vehicle Info         |      | ✅     |
| Profile Info         | ✅   | ✅     |

---

## 🔒 Data Handling

All user and rider information is securely managed by the backend using Express. Data persistence is handled using local storage or an integrated database (e.g., MongoDB).

---

## 🧑‍💻 API Endpoints (Sample)

- `POST /api/user/register` – Register a new user
- `POST /api/user/login` – Login user
- `POST /api/user/book` – Book a ride

- `POST /api/rider/register` – Register a new rider with vehicle details
- `POST /api/rider/login` – Login rider
- `GET /api/rider/rides` – View available ride requests
- `POST /api/rider/confirm/:rideId` – Confirm ride

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgments

Inspired by Uber’s core functionality and built for educational purposes to demonstrate full-stack development and role-based user flows.
