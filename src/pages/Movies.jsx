import { Button, Flex, Heading, Select, useStatStyles } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { getFilteredMovies } from '../utils/getFilteredMovies';
import { TYPE } from '../utils/contant';

const Movies = () => {
  const { movies,appliedFilter,dispatch } = useDataContext();

  const genres = [...new Set(movies.flatMap(({ genre }) => genre))];

  const years=[...new Set(movies.map(({year})=>year))];
  const ratings=[1,2,3,4,5,6,7,8,9,10];

  const handleFilter=(e,filterType)=>{
    dispatch({type:filterType,payload:e.target.value})

  }

console.log(appliedFilter);
 

const filteredMovies=getFilteredMovies(movies,appliedFilter);

  return (
    <Flex flexDir="column">
      <Flex>
        <Heading>Movies</Heading>
        <Select w='100px' m='.2rem'  name='genre' onChange={(e)=>handleFilter(e,TYPE.GENRE_FILTER)} >
          {genres.map((genre)=>(
          <option key={genre}  >{genre}</option>

          ))}
        </Select>
        <Select w='100px' m='.2rem' name='year'  onChange={(e)=>handleFilter(e,TYPE.YEAR_FILTER)} >
         {
          years.map((year)=>(
            <option key={year} >{year}</option>
          ))
         }
        </Select>
        <Select w='100px' m='.2rem' name='rating'  onChange={(e)=>handleFilter(e,TYPE.RATING_FILTER)} >
         {
          ratings.map((rating)=>(
            <option key={rating} >{rating}</option>
          ))
         }
        </Select>
        <Button>Add a Movie</Button>
      </Flex>
      <Flex flexWrap='wrap' >
        {filteredMovies.length>0 ?  filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        )):(<Heading>No Movies for applied Filter</Heading>)}
      </Flex>

    </Flex>
  );
};
export default Movies;
