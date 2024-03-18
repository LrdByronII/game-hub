import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameStuff/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameStuff/GameHeading";
import TimePeriodSelector from "./components/TimePeriodSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  selectedYear: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const queryMaker = (yearQuery: string) => {
    let allYears = gameQuery.selectedYear ? gameQuery.selectedYear : "";

    if (!allYears?.includes(yearQuery)) {
      allYears += yearQuery + ".";
    } else {
      allYears = allYears.replace(yearQuery + ".", "");
    }
    return allYears;
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5} marginTop={4}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <Box marginRight={5}></Box>
              <TimePeriodSelector
                selectedYearProp={gameQuery.selectedYear}
                onSelectYear={(yearQuery) => {
                  if (yearQuery) {
                    const query = queryMaker(yearQuery);
                    setGameQuery({ ...gameQuery, selectedYear: query });
                  }
                }}
              />
            </Flex>
          </Box>
          <Box marginLeft={2}>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
