====================================================================
            SECURE REACT AUTHENTICATION FLOW
====================================================================

OVERVIEW
A frontend implementation of a modern user authentication system featuring a multi-step signup, two-factor login, and secure session management, built with React and Material-UI.

--------------------------------------------------------------------
KEY FEATURES & TECHNOLOGY
--------------------------------------------------------------------

**Core Features:**
- Full Signup & Login User Flow
- Multi-Step & Two-Factor (2FA) Verification using simulated OTPs
- Secure Cookie-based Session Management
- Client-Side Form Validation
- Protected Routes & Logout Functionality

**Technology Used:**
- React (with Vite)
- Material-UI (MUI)
- React Router
- React Hook Form
- js-cookie

--------------------------------------------------------------------

--------------------------------------------------------------------
LOCAL SETUP INSTRUCTIONS
--------------------------------------------------------------------

1.  **Clone the Repository**
    Open your terminal and run:
    git clone https://github.com/Your-Username/secure-auth-flow.git
    cd secure-auth-flow

2.  **Install Dependencies**
    Run the following command to install the necessary packages:
    npm install

3.  **Run the Development Server**
    Start the application with this command:
    npm run dev

    The application will be available at http://localhost:5173.

--------------------------------------------------------------------
SECURITY CONCEPTS EXPLAINED
--------------------------------------------------------------------

**OTP Handling:**
The One-Time Password (OTP) verification process is simulated on the frontend for demonstration purposes. In a production environment, this logic must be handled by a secure backend server to prevent tampering.

**Secure Cookies:**
Session tokens are stored using the `js-cookie` library. To enhance security, all cookies are set with two critical flags:
- `secure: true`: Ensures cookies are only transmitted over HTTPS connections.
- `sameSite: 'strict'`: Protects against Cross-Site Request Forgery (CSRF) attacks.

**Refresh Token Strategy:**
This project sets a refresh token, but the full refresh logic is not implemented as it requires a backend. The standard industry approach involves using an API interceptor to silently catch `401 Unauthorized` errors and use the long-lived refresh token to fetch a new access token, ensuring a seamless user experience without requiring frequent logins.
