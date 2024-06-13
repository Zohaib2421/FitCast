import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Wthr from './components/Wthr';
import TodayOutfitContainer from './components/TodayOutfitContainer';
import AddItem from './components/ItemComponents/AddItem';
import Wardrobe from './components/Wardrobe';

function App() {
  // State to toggle dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Toggles the dark mode on and off
   * @returns {void}
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={
          <main className={`w-screen flex gap-14 h-screen px-14 py-10 2xl:px-20 2xl:py-16 bg-background dark:bg-dark-background`}>
            <Wthr toggleDarkMode={toggleDarkMode} />
            <TodayOutfitContainer />
          </main>
        } />
        {/* Wardrobe Route */}
        <Route path="/wardrobe" element={
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl">Wardrobe</h1>
              <Link to="/" className="text-blue-500 dark:text-blue-300">Back to Main</Link>
            </div>
            <AddItem />
            <Wardrobe />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
