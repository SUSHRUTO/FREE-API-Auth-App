# 🔐 Authentication App (FreeAPI)

A simple frontend authentication application built using **HTML, Tailwind CSS, and JavaScript**, integrated with the FreeAPI Authentication Module.

This project demonstrates how authentication works on the frontend, including user registration, login, session handling, and logout functionality.

---

## 🚀 Live Demo

👉 (Add your deployed link from Vercel or Netlify here)

---

## 📂 GitHub Repository

👉 (Paste your repo link here)

---

## 📌 Features

* ✅ User Registration
* ✅ User Login
* ✅ Logout Functionality
* ✅ Display Current User
* ✅ Error Handling & Success Messages
* ✅ Loading State Feedback
* ✅ Clean UI using Tailwind CSS
* ✅ Session simulation using localStorage

---

## 🛠️ Tech Stack

* HTML5
* Tailwind CSS (CDN)
* Vanilla JavaScript
* FreeAPI (Authentication API)

---

## 🔗 API Endpoints Used

* Register User → `POST /users/register`
* Login User → `POST /users/login`
* Logout User → `POST /users/logout`
* Get Current User → `GET /users/current-user`

Base URL:

```
https://api.freeapi.app/api/v1
```

---

## ⚙️ How to Run Locally

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Open the project folder

3. Run using Live Server in Visual Studio Code
   OR simply open `index.html` in browser

---

## 🧪 How to Test

1. Register a new user with unique credentials
2. Login using the same username and password
3. Click **Get User** to view logged-in user
4. Click **Logout** to clear session

---

## ⚠️ Known Issue (CORS)

The FreeAPI uses cookie-based authentication, but due to a **CORS misconfiguration**:

* The API allows `Access-Control-Allow-Origin: *`
* While cookies require a specific origin

👉 This causes browsers to block requests when using credentials.

### ✅ Solution Implemented

To ensure smooth functionality, this project uses:

* **localStorage-based session handling**
* Stores user data after login
* Simulates authentication state on frontend

---

## 💡 Learning Outcomes

* Understanding API-based authentication flow
* Handling HTTP requests using `fetch()`
* Managing frontend state (login/logout)
* Debugging real-world issues like CORS
* Working with browser storage (localStorage)

---

## 🚀 Future Improvements

* Add JWT-based authentication
* Build a protected dashboard page
* Convert project to React
* Add form validation and better UX
* Implement backend proxy to fix CORS properly

---

## 👨‍💻 Author

**Sushruto Majumdar**

---

## ⭐ Acknowledgement

Project inspired by Web Dev Cohort 2026 assignment using FreeAPI.
