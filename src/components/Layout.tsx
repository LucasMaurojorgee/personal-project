import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const items = ["Characters", "Locations"];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row bg-red-400">
      <NavBar items={items} />
      {children}
    </div>
  );
};
