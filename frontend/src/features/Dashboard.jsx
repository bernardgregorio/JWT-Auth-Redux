const Dashboard = () => {
  return (
    <section className="container mx-auto w-5xl p-2">
      <h1 className="text-4xl my-6">MERN Authentication with JWT & Redux</h1>
      <h1 className="text-3xl my-3">Tech Stack</h1>
      <p>This boilerplate leverages the following technologies:</p>
      <ul className="list-disc list-inside my-3">
        <li>MongoDB – NoSQL database for storing user credentials securely.</li>
        <li>
          Express.js – Backend framework to handle authentication routes and API
          requests.
        </li>
        <li>
          React.js – Frontend library for creating a responsive and interactive
          UI.
        </li>
        <li>
          Node.js – Runtime environment for executing JavaScript on the server.
        </li>
        <li>
          Redux Toolkit – State management for handling authentication and
          global app state.
        </li>
        <li>
          Tailwind CSS – Utility-first CSS framework for styling the frontend
          efficiently.
        </li>
      </ul>
      <h1 className="text-3xl my-3">Features</h1>
      <ul className="list-disc list-inside my-3">
        <li>User Registration and Login</li>
        <li>Password Hashing using bcrypt</li>
        <li>JWT-based Authentication</li>
        <li>Protected Routes Implementation</li>
        <li>Token Expiry Handling</li>
        <li>Global State Management with Redux</li>
        <li>
          Tailwind CSS for Styling - Fully Functional Frontend Integration
        </li>
      </ul>
    </section>
  );
};

export default Dashboard;
