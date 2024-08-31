# Real-Time Security Incident Simulator 🚀

## Description

The **Real-Time Security Incident Simulator** is a dynamic cybersecurity simulation platform where users can play as either "hackers" or "defenders." Defenders must identify, contain, and mitigate attacks, while hackers attempt to breach simulated systems. This interactive tool provides a hands-on approach to understanding real-time cybersecurity challenges.

## Features

- **Hackers**: Launch attacks like SQL Injection, DDoS, and more. Attacks are displayed in real-time on the dashboard of all users. 💻⚠️
- **Defenders**: Deploy defenses such as firewalls, IDS/IPS, etc. Defenses are shown in real-time on the dashboard of all users. 🛡️✅
- **Interactive Dashboard**: Monitor attacks and defenses in real-time.

## Installation

To set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Apatoma/Simulador-de-Incidentes-de-Seguridad-en-Tiempo-Real.git
    cd Simulador-de-Incidentes-de-Seguridad-en-Tiempo-Real
    ```

2. **Install dependencies**:
    Ensure you are in the project folder and run:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the root of the project with the following content:
    ```env
    DB_URL=mongodb://localhost:27017/cyber-security-simulator
    SESSION_SECRET=your_secret_key_here
    PORT=3000
    ```
    - `DB_URL`: Connection URL for your MongoDB database.
    - `SESSION_SECRET`: Secret key for session management.
    - `PORT`: Port for running the application (default is 3000).

4. **Start the server**:
    Run the following command to start the server:
    ```bash
    npm start
    ```
    The server will start at [http://localhost:3000](http://localhost:3000).

## Usage

- **Access the Application**: Open your web browser and go to [http://localhost:3000](http://localhost:3000). 🌐
- **Register a New User**:
  - Navigate to [http://localhost:3000/auth/register](http://localhost:3000/auth/register) to register a new user.
  - Choose a username, a password, and select a role (Hacker or Defender).
- **Log In**:
  - Go to [http://localhost:3000/auth/login](http://localhost:3000/auth/login) to log in with the username and password you chose during registration.
- **Access the Dashboard**:
  - After logging in, you will be redirected to the dashboard at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).
  - Depending on your role, you will be able to launch attacks (if you're a hacker) or deploy defenses (if you're a defender).

To experience the application online, visit: [Real-Time Security Incident Simulator](http://localhost:3000).

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-new-feature
    ```
3. **Make your changes and commit them**:
    ```bash
    git commit -am 'Add new feature'
    ```
4. **Push your changes**:
    ```bash
    git push origin feature-new-feature
    ```
5. **Create a Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details. 📜

---

Made with ❤️ by [Alejandro](https://github.com/Apatoma)
