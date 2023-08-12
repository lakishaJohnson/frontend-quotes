import { Link } from "react-router-dom";

function NavBar() {
   return( 
        <nav>
           <Link to='/'><div><span>Q</span>uotes</div></Link>
           {/* <Link to='/quotes/new'><p className="nav-btn">New Quote</p></Link> */}
        </nav>
    )
}

export default NavBar;