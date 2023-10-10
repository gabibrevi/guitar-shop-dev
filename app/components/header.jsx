import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Nav from "./nav";

const Header = () => {
    return (
        <header className="header">
            <div className="container bar">
                <Link to="/">
                    <img className="logo" src={logo} alt="icon logo"></img>
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
