import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
    const skeletons = [0]
    for (let i = 1; i < 20; i++) skeletons.push(i);

    return (
        <>
            {error && (<Text>{error}</Text>)}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={5}
                padding='10px'
            >
                {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
                    <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>)}
                {data.map(game => <GameCardContainer key={game.id}>
                    <GameCard game={game}></GameCard>
                </GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid