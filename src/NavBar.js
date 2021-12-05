import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="home-btn">
        <Link to="/">
          HOME
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
