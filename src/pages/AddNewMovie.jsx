import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useDataContext } from '../context/DataContextProvider';
  import { useNavigate, } from 'react-router-dom';
import { TYPE } from '../utils/contant';
  
  
  const AddNewMovie = () => {
    const {dispatch}=useDataContext()
    const [movie, setMovie] = useState({
        title: "",
        summary: "",
        year: 0,
        cast: '',
        genre: [],
        rating: 0 ,
        director: "",
        writer: "",
        imageURL: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
      
        const formattedValue = (name === 'rating' || name === 'year') ? Number(value) : value;
      
        setMovie((prevMovie) => ({ ...prevMovie, [name]: formattedValue }));
      };
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            ...movie,
            id: Math.floor(Math.random() * 10000)
        };
    
        dispatch({type: TYPE.ADD_NEW_MOVIE, payload: newMovie});
    };
    
      return (
        <Flex  direction="column" w='50%' m={5} >
            <form  onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input name="title" value={movie.title} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Summary</FormLabel>
            <Input name="summary" value={movie.summary} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Year</FormLabel>
            <Input name="year" value={movie.year} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>cast</FormLabel>
            <Input name="cast" value={movie.cast} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input name="genre" value={movie.genre} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <Input name="rating" value={movie.rating} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Director</FormLabel>
            <Input name="director" value={movie.director} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Writer</FormLabel>
            <Input name="writer" value={movie.writer} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>ImageURL</FormLabel>
            <Input name="imageURL" value={movie.imageURL} onChange={handleChange} />
          </FormControl>
          <Button mt={4} type="submit">Add Movie</Button>
          </form>
        </Flex>
      );
  };
  
  export default AddNewMovie;
  