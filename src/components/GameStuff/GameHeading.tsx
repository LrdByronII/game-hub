import { Heading } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";
import useYear from "../../hooks/useYear";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const selectedYearQuery = useGameQueryStore(
    (s) => s.gameQuery.selectedYearQuery
  );
  const year = useYear(selectedYearQuery);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games ${
    year ? "From " + year.label : ""
  }`;

  return (
    <Heading fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
