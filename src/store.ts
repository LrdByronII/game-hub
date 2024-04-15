import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  selectedYearQuery?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setSelectedYearQuery: (selectedYearsQuery: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
    })),
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setSelectedYearQuery: (selectedYearQuery) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, selectedYearQuery: selectedYearQuery },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Counter Store", useGameQueryStore);

export default useGameQueryStore;
