import { useState } from "react";

function LoginForm({ onLoginSuccess }) {
 
  const formTitle = "Account Login";
  const currentDate = new Date().toLocaleDateString();

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  
  const [loginHistory, setLoginHistory] = useState([]);

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

      // Add to login history array
      const newEntry = {
        id: Date.now(),
        email: formData.email,
        time: new Date().toLocaleString(),
      };
      setLoginHistory([...loginHistory, newEntry]);

      if (onLoginSuccess) {
        onLoginSuccess(formData.email);
      }
    } else {
      setMessage("Please fill in all fields.");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Variable rendered */}
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

      <button type="submit" className="login-button">
        Log In
      </button>

      {/* Variable rendered */}
      {message && <p className="login-message">{message}</p>}

      {/* Array rendered as UI list */}
      {loginHistory.length > 0 && (
        <div className="login-history">
          <h3>Login History ({loginHistory.length})</h3>
          <ul className="history-list">
            {loginHistory.map((entry) => (
              <li key={entry.id}>
                {entry.email} — {entry.time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default LoginForm;