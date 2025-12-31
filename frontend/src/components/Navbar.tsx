import "../styles/components/Navbar.css";

const Navbar = () => {

  function openWhatsapp(){
    window.open("https://wa.me/77019571855", "_blank");
  }

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

        <button onClick={() => openWhatsapp()} className="navbar-btn">Связаться</button>
      </div>
    </nav>
  );
};

export default Navbar;