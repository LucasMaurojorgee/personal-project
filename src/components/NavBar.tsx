import { NavBarProps } from "../types/types";

const NavBar = ({ items }: NavBarProps) => {
  return (
    <div className="bg-red-400">
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default NavBar;
