import { Link, useLocation } from "react-router-dom";
import "./Header.css";

interface HeaderItem {
  name: string;
  link: string;
}
const headerItems: HeaderItem[] = [
  {
    name: "Characters",
    link: "/"
  },
  {
    name: "Episodes",
    link: "/episodes"
  },
  {
    name: "Locations",
    link: "/locations"
  }
];

const Header = () => {
  const { pathname } = useLocation();
  const isActive = (link: string) => pathname === link;

  return (
    <header>
      {headerItems.map(({ name, link }: HeaderItem) => (
        <Link
          className={`Header-button ${isActive(link) && "Active"}`}
          to={link}
          key={name}
        >
          {name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
