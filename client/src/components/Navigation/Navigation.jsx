import { Link } from "react-router-dom";
export default function Navigation({ items, hrefs, styleNav }) {
  return (
    <nav className={styleNav}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              style={
                window.location.pathname === "/packages"
                  ? { color: "#000" }
                  : { color: "#ffff" }
              }
              to={hrefs[index]}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
