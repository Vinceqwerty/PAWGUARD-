// pages/loginpage.jsx
import { useState } from "react";
import Button from "../components/Button";
import {
  systemName,
  systemTagline,
  currentYear,
} from "../data/systemData";
import "../styles/loginpage.css";

function LoginPage({ onLogin }) {
  const formTitle = "Account Login";
  const currentDate = new Date().toLocaleDateString();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      setMessage("Login successful! Welcome, " + formData.email);
      onLogin(formData.email);
    } else {
      setMessage("Please fill in all fields.");
    }
  }

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>{systemName}</h1>
        <p>{systemTagline}</p>
      </header>

      <main className="login-main">
        <section className="login-section">
          <h2>Sign In to Your Account</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <p className="form-date">{formTitle} — {currentDate}</p>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Reusable Button component used here */}
            <Button label="Log In" type="primary" />

            {message && <p className="login-message">{message}</p>}
          </form>
        </section>
      </main>

      <footer className="login-footer">
        <p>&copy; {currentYear} {systemName}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LoginPage;