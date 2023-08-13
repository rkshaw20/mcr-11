import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
    // children:[
    //   {index:true,element:<Dashboard/>},
      // {path:'/departments',element:<Departments/>},
    //  ]
  }
])
function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
