const Dashboard = () => {
  return (
    <section className="container mx-auto w-5xl p-2">
      <h1 className="text-4xl my-6">MERN Authentication Boilerplate</h1>
      <h1 className="text-3xl my-3">Introduction</h1>
      <p className="my-3">
        A fully functional authentication setup built using the MERN stack. This
        project is designed to serve as a starting point for developers who want
        to integrate authentication seamlessly into their MERN applications.
      </p>
      <h1 className="text-3xl my-3">Tech Stack</h1>
      <p>This boilerplate leverages the following technologies:</p>
      <ul className="list-disc list-inside my-3">
        <li>MongoDB: NoSQL database for storing user credentials securely.</li>
        <li>
          Express.js: Backend framework to handle authentication routes and API
          requests.
        </li>
        <li>
          React.js: Frontend library for creating a responsive and interactive
          UI.
        </li>
        <li>
          Node.js: Runtime environment for executing JavaScript on the server.
        </li>
      </ul>
      <h1 className="text-3xl my-3">Authentication Mechanism </h1>
      <p>
        This project implements authentication using Passport.js with JWT (JSON
        Web Token), ensuring secure user authentication. The backend is
        responsible for verifying user credentials and issuing JWTs, while the
        frontend uses Axios to make API requests for authentication-related
        operations.
      </p>
      <h1 className="text-3xl my-3">Features</h1>
      <ul className="list-disc list-inside my-3">
        <li>User Registration and Login</li>
        <li>Password Hashing using bcrypt</li>
        <li>JWT-based Authentication</li>
        <li>Protected Routes Implementation</li>
        <li>Token Expiry Handling</li>
        <li>Fully Functional Frontend Integration</li>
      </ul>
      <h1 className="text-3xl my-3">How to Use</h1>
      <p>
        This repository serves as a boilerplate for authentication in MERN
        applications. Developers can clone the project, modify configurations,
        and integrate additional features as needed.
      </p>
      <p className="my-3">
        Stay tuned for further improvements and enhancements.
      </p>
    </section>
  );
};

export default Dashboard;
