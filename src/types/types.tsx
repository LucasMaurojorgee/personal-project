type Item = {
  name: string;
  navigate: string;
  icon: React.ReactNode;
};

export type NavBarProps = {
  items: Item[];
};
