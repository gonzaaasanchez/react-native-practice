import { createContext, ReactNode, useState } from 'react';
import React from 'react';

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};

const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = ({
  children,
}) => {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId != id)
    );
  };

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
