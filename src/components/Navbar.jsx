import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <Link className="navLink" to="/">WikiCountries</Link>
        </nav>
    )

}

export default Navbar;
