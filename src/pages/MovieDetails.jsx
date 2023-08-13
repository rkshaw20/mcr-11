import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContextProvider";
import { TYPE } from "../utils/contant";

const MovieDetails=()=>{
    const {movieId}=useParams();
    const {movies,starList,dispatch}=useDataContext();

    const movie=movies.find(({id})=>id === +movieId)

    const isStarred=starList.find((movie)=>movie.id=== +movieId)
    console.log(movie);

    const handleStar=()=>{
     isStarred ? dispatch({type:TYPE.REMOVE_FROM_STARLIST,payload:movie.id}): dispatch({type:TYPE.ADD_TO_STARLIST,payload:movie})
    }
    return (
       <Flex m={4} >
          <Flex><Image src={movie.imageURL} h='600px' w='400px' /></Flex>
          <Flex>
            <Flex m={2} flexDir='column' justifyContent='space-between' >
                <Heading>{movie?.title}</Heading>
                <Text>{movie?.summary}</Text>
                <Text>Year:{movie?.year}</Text>
                <Text>Genre:{movie?.genre}</Text>
                <Text>Rating:{movie?.rating}</Text>
                <Text>Director:{movie?.director}</Text>
                <Text>Cast:{movie?.cast}</Text>
                <Flex>
                    <Button bgColor={"yellow.400"} onClick={()=>handleStar()} >{isStarred? 'Unstar':'star'}</Button>
                </Flex>
            </Flex>
          </Flex>
       </Flex>
    )
}
export default MovieDetails;