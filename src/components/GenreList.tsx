
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY={2}>
                    <HStack>
                        <Image boxSize={9} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}

export default GenreList