import NavBar from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const items = ["Characters", "Locations"];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <NavBar items={items} />
      {children}
    </div>
  );
};
