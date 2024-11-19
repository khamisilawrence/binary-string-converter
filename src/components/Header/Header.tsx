import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="w-full py-4">
      <h1 className="text-2xl lg:text-4xl xl:text-6xl tracking-wide font-bold text-center text-blue-600">
        {children}
      </h1>
    </header>
  );
};

export default Header;
