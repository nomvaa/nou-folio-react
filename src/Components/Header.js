import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import '../index.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Header() {


    return (<>
        <nav>
            <div className="logo"><span className="firstName">nou</span>|folio<b>.</b></div>
            <ul className="navItems">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="links">
                <a href="https://www.linkedin.com/in/nou-v-8a766166/"><FaLinkedin /> </a>
                <a href="https://github.com/nomvaa"> <FaGithub /> </a>
            </div>
        </nav>

    </>)
}