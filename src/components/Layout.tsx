import { MapPinIcon, TvIcon, UserIcon } from "@heroicons/react/16/solid";
import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const items = [
  {
    name: "Characters",
    navigate: "/characters",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    name: "Locations",
    navigate: "/locations",
    icon: <MapPinIcon className="h-5 w-5" />,
  },
  {
    name: "Episodes",
    navigate: "/episodes",
    icon: <TvIcon className="h-5 w-5" />,
  },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row bg-red-400">
      <NavBar items={items} />
      {children}
    </div>
  );
};
