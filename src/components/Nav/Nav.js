import { Link } from "react-router-dom";
import './Nav.css'
const Nav = () => {
  return (
    <div id="navWrap">
      <nav>
        <ul id="linkList">
          <li className="item">
            <Link to="/">home</Link>
          </li>
          <li className="item">
            <Link to="/moreinfo">more</Link>
          </li>
          <li className="item">
            <Link to="/ingredients">ingredients</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
