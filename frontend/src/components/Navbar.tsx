import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <span>N</span>
          </div>
          <h1 className="logo-text">Nexus Solution</h1>
        </div>

        {/* <ul className="navbar-menu">
          <li>
            <a href="#home" className="nav-link">
              Главная
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Услуги
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              О компании
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Контакты
            </a>
          </li>
        </ul> */}

        {/* <button className="navbar-btn">Связаться</button> */}
      </div>
    </nav>
  );
};

export default Navbar;