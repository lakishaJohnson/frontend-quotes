import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="background"></div>
    <nav>  
      <Link to="/">
        <div>
          <span>Q</span>uotes
        </div>
      </Link>
    </nav>
    </>
  );
}

export default NavBar;
