import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  selectedYears?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setSelectedYears: (selectedYears: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) => set(() => ({ gameQuery: { genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store, platformId: platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store, sortOrder: sortOrder } })),
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { ...store, searchText: searchText } })),
  setSelectedYears: (selectedYears) =>
    set((store) => ({ gameQuery: { ...store, selectedYears: selectedYears } })),
}));

export default useGameQueryStore;
