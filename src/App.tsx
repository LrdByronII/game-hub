import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameStuff/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameStuff/GameHeading";
import TimePeriodSelector from "./components/TimePeriodSelector";

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5} marginTop={4}>
            <PlatformSelector />
            <Box marginRight={5}></Box>
            <TimePeriodSelector />
          </Flex>
        </Box>
        <Box marginLeft={2}>
          <SortSelector />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
