import React from "react";
import { SearchBar } from "./misc/SearchBar";
import { DarkModeButton } from "./misc/DarkModeButton";
import useDarkMode from '../hooks/useDarkMode';

export default function NavBar() {
  const [, toggleDarkMode] = useDarkMode();

  return (
    <main className="flex items-center justify-end w-full gap-4 max-h-fit">
      {/* Search Bar*/}
      <SearchBar />
      {/* Dark Mode Button */}
      <DarkModeButton onClick={toggleDarkMode} />
      {/* Profile */}
      <button
        className="rounded-full size-12 bg-primary-tw"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/base-profile.jpeg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></button>
    </main>
  );
}