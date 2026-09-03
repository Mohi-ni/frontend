import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>SuuSri Internship - About Page</h1>

      <div className="card">
        <h2>Intern Details</h2>
        <p><strong>Name:</strong> Mohine Priyadarsani</p>
        <p><strong>Project:</strong> SuuSri Full-Stack Developer Internship</p>
        <p><strong>Week:</strong> Week 1 - Git & React Practice</p>
      </div>

      <div className="card">
        <h2>Technology Stack</h2>
        <ul>
          <li>React.js</li>
          <li>Vite</li>
          <li>JavaScript (ES6)</li>
          <li>CSS3</li>
          <li>Git & GitHub</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="card">
        <h2>Internship Goal</h2>
        <p>
          Build a full-stack Task Manager application using React for the
          frontend and backend APIs during the internship program.
        </p>
      </div>
    </div>
  );
}

export default App;