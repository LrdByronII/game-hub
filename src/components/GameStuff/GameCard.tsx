import Game from "../../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "./Emoji";
import Like from "./Like";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({
  game: {
    slug,
    background_image,
    parent_platforms,
    metacritic,
    name,
    rating_top,
  },
}: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <Link to={`/games/${slug}`}>
          <HStack marginBottom={3} justifyContent={"space-between"}>
            <PlatformIconList
              platforms={parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={metacritic} />
          </HStack>
          <Heading fontSize="2xl">{name}</Heading>
        </Link>
        <HStack marginTop={2} justifyContent={"space-between"}>
          <Emoji rating={rating_top} />
          <Like />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
