import { TYPE, movies } from '../utils/contant';

// const updatedMovies = movies.map(movie => ({
//   ...movie,
//   starred: false,
//   wishlist: false,
// }));

const setLocalMovies = localStorage.setItem(
  'movies',
  JSON.stringify(movies)
);

const getLocalMovies = JSON.parse(localStorage.getItem('movies'));

export const dataInitialState = {
  movies: getLocalMovies,
  appliedFilter: { searchFilter: '',genreFilter:'',yearFilter:'',ratingFilter:'' },
  starList:[]
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.SEARCH_FILTER: {
      return {
        ...state, appliedFilter:{...state.appliedFilter,searchFilter:action.payload},
      };
    }
    case TYPE.GENRE_FILTER: {
      return {
        ...state, appliedFilter:{...state.appliedFilter,genreFilter:action.payload},
      };
    }
    case TYPE.YEAR_FILTER: {
      return {
        ...state, appliedFilter:{...state.appliedFilter,yearFilter:action.payload},
      };
    }
    case TYPE.RATING_FILTER: {
      return {
        ...state, appliedFilter:{...state.appliedFilter,ratingFilter:action.payload},
      };
    }
    case TYPE.ADD_TO_STARLIST:{
      if(state.starList.some((movie)=>movie.id===action.payload.id)){
        console.log(action.payload);

        return state;
      }
      const updatedList=[...state.starList ,action.payload];
      localStorage.setItem('starList',JSON.stringify(updatedList))

      return{

        ...state,starList:updatedList
      }
    }

    case TYPE.REMOVE_FROM_STARLIST:{
      const updatedList=[...state.starList,]
    }

    default:
      return state;
  }
};
