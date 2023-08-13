const searchFilter = (movies, appliedFilter) =>
  appliedFilter.searchFilter.length > 0
    ? movies.filter(movie =>
        movie.title
          .toLowerCase()
          .includes(appliedFilter.searchFilter.toLowerCase())
      )
    : movies;

const genreFilter = (movies, appliedFilter) =>
  appliedFilter.genreFilter.length > 0
    ? movies.filter(movie => movie.genre.includes(appliedFilter.genreFilter))
    : movies;

const yearFilter = (movies, appliedFilter) =>
  appliedFilter.yearFilter.length > 0
    ? movies.filter(({ year }) => year === +appliedFilter.yearFilter)
    : movies;

const ratingFilter = (movies, appliedFilter) =>
  appliedFilter.ratingFilter.length > 0
    ? movies.filter(({ rating }) => rating >= +appliedFilter.ratingFilter)
    : movies;



export const getFilteredMovies = (movies, appliedFilter) => {
  const filterFunctions = [searchFilter, genreFilter, yearFilter,ratingFilter];
  return filterFunctions.reduce(
    (acc, func) => func(acc, appliedFilter),
    movies
  );
};
