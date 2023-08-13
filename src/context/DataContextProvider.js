import { createContext, useContext, useReducer } from "react";
import { dataInitialState, dataReducer } from "../reducer/DataReducer";



const DataContext = createContext({
    movies: [],
    appliedFilter:{},
    starList:[]
    
  });
  
  export const useDataContext = () => useContext(DataContext);
  
  const DataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, dataInitialState);
    return (
      <DataContext.Provider
        value={{
          movies:state.movies,
          appliedFilter:state.appliedFilter,
          starList:state.starList,
          dispatch,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataContextProvider;