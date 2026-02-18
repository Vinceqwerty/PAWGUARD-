import LoginForm from "../components/LoginForm";
import {
  systemName,
  systemTagline,
  currentYear,
} from "../data/systemData";
import "../styles/loginpage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <header className="login-header">
        <h1>{systemName}</h1>
        <p>{systemTagline}</p>
      </header>

      <main className="login-main">
        <section className="login-section">
          <h2>Sign In to Your Account</h2>
          <LoginForm />
        </section>
      </main>

      <footer className="login-footer">
        <p>
          &copy; {currentYear} {systemName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LoginPage;