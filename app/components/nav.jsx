import { Link, useLocation } from "@remix-run/react";
import image from "../../public/img/carrito.png";
const Nav = () => {
    const location = useLocation();
    return (
        <nav className="navegation">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
            </Link>
            <Link
                to="/about-us"
                className={location.pathname === "/about-us" ? "active" : ""}>
                About Us
            </Link>
            <Link
                to="/shopping"
                className={location.pathname === "/shopping" ? "active" : ""}>
                Shopping
            </Link>
            <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}>
                Blog
            </Link>
            <Link to="/basket">
                <img src={image} alt="shoping" />
            </Link>
        </nav>
    );
};

export default Nav;
