import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <h1>Welcome, Mohine! 👋</h1>
          <p>This is your SuuSri internship dashboard.</p>

          <ProfileCard />
        </main>
      </div>
    </div>
  );
}

export default App;