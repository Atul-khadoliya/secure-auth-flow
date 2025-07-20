🔐 Secure Authentication Flow
A sleek, modern, and secure user authentication flow built with React and Material-UI.


https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

This project demonstrates a complete, frontend-focused user authentication journey. It covers everything from multi-step signup and two-factor login to secure session management using cookies, all wrapped in a clean, responsive UI.



✅ Features
Full User Journey: Complete flow from Signup → Verification → Login → 2FA → Dashboard.

Multi-Step Verification: Simulates both Mobile and Email OTP validation for new user registration.

Two-Factor Authentication (2FA): An extra security layer after login where users can choose their verification method.

Robust Form Handling: Built with React Hook Form for efficient state management and validation.

Secure Cookie Storage: Implements accessToken and refreshToken storage with essential security flags (secure: true, sameSite: 'strict').

Protected Routes: A /dashboard page accessible only after full authentication.

Clean UI: Modern and responsive interface built with Material-UI.

🛠️ Tech Stack
Framework: React (Vite)

UI Library: Material-UI (MUI)

Routing: React Router DOM

Form Management: React Hook Form

Cookie Management: js-cookie

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Clone the repo

Bash

git clone https://github.com/Your-Username/secure-auth-flow.git
Navigate into the directory

Bash

cd secure-auth-flow
Install NPM packages

Bash

npm install
Run the development server

Bash

npm run dev
Your app will be running on http://localhost:5173.

🗺️ Application Flow
The user navigates through a logical and secure sequence of pages:

Signup Page (/signup): New users register their details.

Signup Verification (/signup-verification): Users verify their mobile and email with simulated OTPs.

Login Page (/login): Existing users sign in.

Login Verification (/login-verification): Users complete a 2FA check.

Dashboard (/dashboard): Authenticated users land on this protected page.

🔒 Security Concepts Explained
OTP Handling
In a real app, the backend generates, sends, and verifies OTPs. For this frontend project, the process is simulated by checking user input against hardcoded values. This allows for the full development of the UI/UX without requiring a complex backend.

Cookie Storage
We use js-cookie to handle session tokens. To enhance security, all cookies are set with two critical flags:

secure: true: Ensures cookies are only sent over HTTPS.

sameSite: 'strict': Protects against CSRF attacks by ensuring cookies are only sent for same-site requests.

Refresh Token Strategy
This project stores a dummy refresh token. A real-world implementation would use an API interceptor to handle token refreshes seamlessly:

An API call is made with a short-lived accessToken.

If the token is expired, the API returns a 401 Unauthorized error.

The interceptor catches this error and silently uses the long-lived refreshToken to request a new accessToken.

With the new token, the original API call is automatically retried, providing a smooth experience for the user.
