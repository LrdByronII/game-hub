import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameStuff/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameStuff/GameHeading";
import TimePeriodSelector from "./components/TimePeriodSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  selectedYears: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const queryMaker = (yearQuery: string) => {
    let allYears = gameQuery.selectedYears ? gameQuery.selectedYears : "";

    if (!allYears?.includes(yearQuery)) {
      allYears += yearQuery + ".";
    } else {
      allYears = allYears.replace(yearQuery + ".", "");
    }
    return allYears;
  };

  return (
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
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5} marginTop={4}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <Box marginRight={5}></Box>
            <TimePeriodSelector
              selectedYearProp={gameQuery.selectedYears}
              onSelectYear={(yearQuery) => {
                if (yearQuery) {
                  const query = queryMaker(yearQuery);
                  setGameQuery({ ...gameQuery, selectedYears: query });
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
  );
}

export default App;
