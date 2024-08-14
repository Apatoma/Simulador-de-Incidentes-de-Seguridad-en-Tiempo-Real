Real-Time Security Incident Simulator 🚀
Description

This is a real-time cybersecurity simulator where users can play as "hackers" or "defenders." Defenders must identify, contain, and mitigate attacks while hackers attempt to breach simulated systems.
Requirements

    Node.js (version 14.x or higher)
    MongoDB (installed and running)

Installation

    Clone the repository

    bash

git clone https://github.com/your-username/cyber-security-simulator.git
cd cyber-security-simulator

Install dependencies

Ensure you are in the project folder and run:

bash

npm install

Configure environment variables

Create a .env file in the root of the project with the following content:

env

DB_URL=mongodb://localhost:27017/cyber-security-simulator
SESSION_SECRET=your_secret_key_here
PORT=3000

    DB_URL: Connection URL for your MongoDB database.
    SESSION_SECRET: Secret key for session management.
    PORT: Port for running the application (default is 3000).

Start the server

Run the following command to start the server:

bash

    npm start

    The server will start at http://localhost:3000.

Usage

    Access the Application

    Open your web browser and go to http://localhost:3000. 🌐

    Register a New User
        Navigate to http://localhost:3000/auth/register to register a new user.
        Choose a username, a password, and select a role (Hacker or Defender).

    Log In
        Go to http://localhost:3000/auth/login to log in with the username and password you chose during registration.

    Access the Dashboard
        After logging in, you will be redirected to the dashboard at http://localhost:3000/dashboard.
        Depending on your role, you will be able to launch attacks (if you're a hacker) or deploy defenses (if you're a defender).

Features

    Hackers: Can launch attacks like SQL Injection, DDoS, etc. Attacks are displayed in real-time on the dashboard of all users. 💻⚠️
    Defenders: Can deploy defenses like firewalls, IDS/IPS, etc. Defenses are shown in real-time on the dashboard of all users. 🛡️✅

Project Structure

arduino

cyber-security-simulator/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── hacker.js
│   │   └── defender.js
│   └── images/
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
├── models/
│   ├── user.js
│   ├── incident.js
│   └── score.js
├── routes/
│   ├── index.js
│   ├── auth.js
│   └── dashboard.js
├── controllers/
│   ├── authController.js
│   └── incidentController.js
├── app.js
├── package.json
└── .env

Contributing

If you want to contribute to the project, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-new-feature).
    Make your changes and commit them (git commit -am 'Add new feature').
    Push your changes (git push origin feature-new-feature).
    Create a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details. 📜

Feel free to tweak any sections according to your needs. Good luck with your cybersecurity simulator! If you need further assistance, just let me know. 😊
