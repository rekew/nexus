import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Nexus</h1>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
