import { Flex, Heading, Input, Link } from "@chakra-ui/react"
import {Link as ReachLink} from 'react-router-dom'
import { useDataContext } from "../context/DataContextProvider"
import { useEffect, useState } from "react";
import { TYPE } from "../utils/contant";

const NavBar=()=>{
    const {appliedFilters , dispatch}=useDataContext();
    const [inputValue,setInputValue]=useState('')


    const handleSearch=(e)=>{
        const value=e.target.value;
        setInputValue((prev)=>value)
    }

    useEffect(()=>{
     dispatch({type:TYPE.SEARCH_FILTER,payload:inputValue})
    },[inputValue])

    return(
        <Flex w='full' p='.5rem' bgColor='yellow.400' justifyContent='space-between' >
            <Flex>
            <Heading>IMDB</Heading>

            </Flex>
         <Flex>
            <Input type="search" placeholder="Search movies by titile cast and director... " w='350px' onChange={handleSearch} value={inputValue} bgColor='white'
             />
         </Flex>
         <Flex justifyContent='space-around' alignItems='center' w='300px' >
            <Link as={ReachLink} to='/' >
            Movies
            </Link>
            {/* <Link as={ReachLink} to='/wishList' >
            Wishlist
            </Link> */}
            <Link as={ReachLink} to='starred' >
            Starred Movies
            </Link>
         </Flex>
        </Flex>
    )
}
export default NavBar;