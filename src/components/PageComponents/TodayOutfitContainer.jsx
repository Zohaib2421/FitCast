import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Outfit from "../OutfitComponents/Outfit";
import useOutfitGenerator from "../../hooks/useOutfitGenerator";
import useAppContext from "../../context/useAppContext";

export default function TodayOutfitContainer() {
  const { globalOutfits, setGlobalOutfits, wthrConditions } = useAppContext();
  const generateOutfit = useOutfitGenerator();

  useEffect(() => {
    if (
      wthrConditions &&
      (!globalOutfits ||
        globalOutfits.length === 0 ||
        globalOutfits[0] === null)
    ) {
      const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
      console.log("Generated outfits on mount:", newOutfits);
      setGlobalOutfits(newOutfits);
    }
  }, [wthrConditions, globalOutfits, setGlobalOutfits, generateOutfit]);

  const regenerateOutfits = () => {
    if (wthrConditions) {
      const newOutfits = [generateOutfit(), generateOutfit(), generateOutfit()];
      console.log("Regenerated outfits:", newOutfits);
      setGlobalOutfits(newOutfits);
    }
  };

  return (
    <main className="flex flex-col w-full h-full overflow-y-auto gap-9 scrollbar-hide">
      <div className="flex items-center justify-between w-full h-fit">
        <p className="text-3xl font-medium text-primary-tw dark:text-dark-primary-tw">
          Today's Outfits
        </p>
        <div className="flex gap-4 max-h-fit">
          <button
            onClick={regenerateOutfits}
            className="py-2 px-4 bg-component-border rounded-sm text-primary-tw border-b-2 hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100"
          >
            Regenerate
          </button>
          <Link to="/wardrobe">
            <button className="px-4 py-2 rounded-sm text-primary-tw dark:text-dark-background bg-foreground border-component-border dark:bg-dark-primary-tw border-b-2 hover:translate-y-0.5 hover:border-b-2 hover:border-transparent transition-all duration-100">
              Wardrobe
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        {globalOutfits &&
          globalOutfits.map((outfit, index) => (
            <Outfit key={index} clothingItems={outfit} />
          ))}
      </div>
    </main>
  );
}
