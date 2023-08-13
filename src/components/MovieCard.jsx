

import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useDataContext } from "../context/DataContextProvider";
import { TYPE } from "../utils/contant";
import { Link as ReachLink } from "react-router-dom";


const MovieCard=({movie})=>{
  const {dispatch}=useDataContext();
    const {imageURL,title,summary,wishlist}=movie;


const handleStar=()=>{
  dispatch({type:TYPE.ADD_TO_STARLIST,payload:movie})
}

    return(
      <Card w='300px' h='520px' m='.5rem' >
       <CardBody m={0} p='.5rem' >
       <Link  as={ReachLink} to={`/${movie.id}`}>

        <Flex flexDir='column' >
        <Image src={imageURL} alt={title} h='300px' w='300px' />
        <Heading size='md' >{title}</Heading>
        <Text>{summary}</Text>
        </Flex>
        </Link>

       </CardBody>
       <CardFooter m={0} p='.5rem' >
       <Flex justifyContent='space-between' gap={2} >
        <Button onClick={()=>handleStar()} >Star</Button>
        <Button>{wishlist? 'Remove Wishlist':'Add To Wishlist'}</Button>
       </Flex>
       </CardFooter>

      </Card>
    )
}

export default MovieCard