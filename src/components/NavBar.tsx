import { NavBarProps } from "../types/types";

const NavBar = ({ items }: NavBarProps) => {
  return (
    <div className="bg-gray-800 flex flex-row gap-5 py-4 pl-5">
      {items.map((item) => (
        <div>
          <p className="text-white cursor-pointer">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
