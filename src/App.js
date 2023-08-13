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

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movies from './pages/Movies';
import WatchList from './pages/WatchList';
import Starred from './pages/Starred';
import MovieDetails from './pages/MovieDetails';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Movies /> },
      {
        path: '/:movieId',
        element: <MovieDetails />,
      },
      {
        path: '/watchList',
        element: <WatchList />,
      },
      { path: '/starred', element: <Starred /> },
    ],
  },
]);
function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
