import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <div>
          <span>Q</span>uotes
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
