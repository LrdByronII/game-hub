import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameStuff/GameGrid";
import GameHeading from "../components/GameStuff/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import TimePeriodSelector from "../components/TimePeriodSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: '"main"',
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};

export default HomePage;
