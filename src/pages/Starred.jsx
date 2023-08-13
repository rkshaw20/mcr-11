import { Flex, Heading, Text } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import MovieCard from '../components/MovieCard';

const Starred = () => {
  const { starList } = useDataContext();
  return (
    <Flex flexDir="column">
      <Flex>
        {' '}
        <Heading>Starred</Heading>
      </Flex>
      <Flex flexWrap="wrap">
        {starList.length > 0 ? (
          starList.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <Text>Nothing in List</Text>
        )}
      </Flex>
    </Flex>
  );
};
export default Starred;
