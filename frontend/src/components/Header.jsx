import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Ma Bibliothèque Personnelle</h1>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
        Ajouter un livre
      </button>
    </header>
  );
};

export default Header;
