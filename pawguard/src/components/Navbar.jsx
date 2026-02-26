import "../styles/dashboard.css";

function Navbar({ brandName, links, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{brandName}</h1>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button className="navbar-logout" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;