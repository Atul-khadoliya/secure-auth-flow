Secure User Authentication Flow
This project is a frontend implementation of a modern, secure user authentication flow. It was built using React and the Material-UI (MUI) component library. It demonstrates the complete user journey from signing up with multi-factor verification to logging in, accessing a protected dashboard, and logging out.

The primary focus is on building a robust and user-friendly interface while simulating backend processes like OTP verification and token generation.

Features
User Signup: A comprehensive signup form with fields for Name, Mobile, Email, and Password.

Multi-Step Signup Verification: Validates both a simulated Mobile OTP and Email OTP before completing registration.

Flexible User Login: Allows users to log in with either their registered Mobile Number or Email Address, plus their password.

Two-Factor Authentication (2FA): After a successful login, the user must complete a second verification step, choosing between a Mobile or Email OTP.

Client-Side Validation: Robust form validation on all inputs for required fields, email format, mobile number length, and password strength.

Secure Cookie Storage: Uses js-cookie to store JWT accessToken and refreshToken with security flags (secure: true, sameSite: 'strict').

Protected Routes: Includes a /dashboard page that is only accessible after a user has been fully authenticated.

Logout Functionality: A functional logout button that clears session cookies and redirects the user to the login page.

Technology Stack
Framework: React (bootstrapped with Vite)

UI Component Library: Material-UI (MUI)

Routing: React Router DOM v6

Form Management: React Hook Form

Cookie Management: js-cookie

Development Server: Vite

Local Setup and Installation
To run this project on your local machine, follow these steps:

Clone the repository:

Bash

git clone https://github.com/Your-Username/secure-auth-flow.git
Navigate to the project directory:

Bash

cd secure-auth-flow
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Open http://localhost:5173 to view the application in your browser.

Authentication Concepts Explained
OTP Handling
In a production application, OTPs are generated and verified by the backend. For this frontend-focused project, this process was simulated to build the complete user interface flow.

How it works: Correct OTPs are hardcoded as constants within the verification page components. User input is checked against these constants.

Why this approach: This allows for the development and testing of the complete UI/UX for OTP verification (including forms, validation, and error states) without the complexity of a full backend, SMS/email gateways, and a database.

Cookie Storage
Session tokens are stored as browser cookies using the js-cookie library. This was implemented with security as a top priority.

Implementation: Upon login, two dummy tokens (accessToken and refreshToken) are created and stored in cookies.

Security Flags:

secure: true: Ensures that the cookie is only transmitted over secure HTTPS connections.

sameSite: 'strict': A crucial flag that mitigates Cross-Site Request Forgery (CSRF) attacks by ensuring the cookie is only sent for requests originating from the same domain.

Refresh Token Strategy
This project stores a refresh token but does not implement the refresh logic, as it requires interaction with a backend. Here is the standard implementation strategy:

The Problem: Access tokens are short-lived for security. Refresh tokens are long-lived and are used to get new access tokens without forcing the user to log in again.

The Flow:

The frontend sends an API request with its accessToken.

If the API responds with a 401 Unauthorized error (signifying token expiry), an API interceptor on the frontend catches this specific error.

The interceptor silently sends the refreshToken to a /refresh-token endpoint.

If the refresh token is valid, the backend returns a new accessToken.

The interceptor saves this new token and automatically retries the original, failed API request. This entire process is seamless to the user.

If the refresh token is also invalid, the user is logged out and redirected to the login page.
