import { createContext, useState, useContext } from 'react';

export const SortAndFilterContext = createContext({
  isSortOpen: false,
  isFilterOpen: false,
  toggleSortOpen: () => {},
  toggleFilterOpen: () => {},
});

export const useSortAndFilter = () => useContext(SortAndFilterContext);

export const SortAndFilterProvider = ({ children }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSortOpen = () => {
    setIsSortOpen(!isSortOpen);
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  };

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
    if (isSortOpen) {
      setIsSortOpen(false);
    }
  };

  return (
    <SortAndFilterContext.Provider value={{ isSortOpen, toggleSortOpen, isFilterOpen, toggleFilterOpen }}>
      {children}
    </SortAndFilterContext.Provider>
  );
};
