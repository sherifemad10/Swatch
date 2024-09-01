// import { createContext, useEffect, useState, useMemo, useReducer } from "react";

// const ApiContext = createContext();

// export function ApiProvider({ children }) {
//   const [firstState, dispatch] = useReducer(reducer, initialData);
//   const [allMovie, setAllMovie] = useState([]);
//   const [allTv, setAllTv] = useState([]);
//   const [topRatedMovie, setTopRatedMovie] = useState([]);
//   const [upcomingMovie, setUpcomingMovie] = useState([]);
//   const [WatchList, setWatchList] = useState([]);
//   const [details, setdetails] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const api_key = "d5d94ed72919557e5e6645d4a9b403df";

//   // theme

//   const initialData = { theme: localStorage.getItem("themee") || "light" };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "CHANGE_THEME":
//         return { ...state, theme: action.newValue };
//       default:
//         return state;
//     }
//   };

//   const changeTheme = (newTheme) => {
//     localStorage.setItem("themee", newTheme);
//     dispatch({ type: "CHANGE_THEME", newValue: newTheme });
//   };
//   // end theme

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responses = await Promise.all([
//           fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`),
//           fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`),
//           fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`),
//           fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`),

//         ]);

//         const data = await Promise.all(responses.map((res) => res.json()));

//         setAllMovie(data[0]?.results || []);
//         setAllTv(data[1]?.results || []);
//         setTopRatedMovie(data[2]?.results || []);
//         setUpcomingMovie(data[3]?.results || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [api_key]);

//   const addtowatchlist = (id) => {
//     const item = allMovie.find((movie) => movie.id === id) || allTv.find((tv) => tv.id === id);

//     if (item && !WatchList.some((watchItem) => watchItem.id === item.id)) {
//       const updatedWatchList = [...WatchList, item];
//       setWatchList(updatedWatchList);
//       localStorage.setItem('watchlist', JSON.stringify(updatedWatchList));
//     }
//   };

//   const removeFromWatchlist = (id) => {
//     const updatedWatchList = WatchList.filter((item) => item.id !== id);
//     setWatchList(updatedWatchList);
//     localStorage.setItem('watchlist', JSON.stringify(updatedWatchList));
//   };

//   const value = useMemo(
//     () => ({
//       allMovie,
//       allTv,
//       topRatedMovie,
//       upcomingMovie,
//       addtowatchlist,
//       WatchList,
//       setWatchList,
//       removeFromWatchlist,
//       details,
//       setdetails,
//       changeTheme,
//       theme: firstState.theme,
//       loading,
//       error,
//     }),
//     [allMovie, allTv, topRatedMovie, upcomingMovie,addtowatchlist,WatchList,setWatchList,removeFromWatchlist,details,loading, error]
//   );

//   return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
// }

// export default ApiContext;

// Import necessary dependencies
import { createContext, useEffect, useState, useMemo, useReducer } from "react";

// Define the API context
const ApiContext = createContext();

// Define the initial data for the theme
const initialData = {
  theme: localStorage.getItem("themee") || "light",
};

// Define the reducer for theme changes
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
    default:
      return state;
  }
};

// Define the API provider component
export function ApiProvider({ children }) {
  // Define the API key
  const api_key = "d5d94ed72919557e5e6645d4a9b403df";

  // Define the state variables
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const [allMovie, setAllMovie] = useState([]);
  const [allTv, setAllTv] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [WatchList, setWatchList] = useState([]);
  const [details, setdetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the function to change the theme
  const changeTheme = (newTheme) => {
    localStorage.setItem("themee", newTheme);
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  // Define the function to fetch data from the API
  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`),
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`),
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
        ),
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`),
      ]);

      const data = await Promise.all(responses.map((res) => res.json()));

      setAllMovie(data[0]?.results || []);
      setAllTv(data[1]?.results || []);
      setTopRatedMovie(data[2]?.results || []);
      setUpcomingMovie(data[3]?.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Define the function to add an item to the watchlist
  const addtowatchlist = (id) => {
    const item =
      allMovie.find((movie) => movie.id === id) ||
      allTv.find((tv) => tv.id === id);

    if (item && !WatchList.some((watchItem) => watchItem.id === item.id)) {
      const updatedWatchList = [...WatchList, item];
      setWatchList(updatedWatchList);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
    }
  };

  // Define the function to remove an item from the watchlist
  const removeFromWatchlist = (id) => {
    const updatedWatchList = WatchList.filter((item) => item.id !== id);
    setWatchList(updatedWatchList);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  };

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [api_key]);

  // Use the useMemo hook to memoize the value object
  const value = useMemo(
    () => ({
      allMovie,
      allTv,
      topRatedMovie,
      upcomingMovie,
      addtowatchlist,
      WatchList,
      setWatchList,
      removeFromWatchlist,
      details,
      setdetails,
      changeTheme,
      theme: firstState.theme,
      loading,
      error,
    }),
    [
      allMovie,
      allTv,
      topRatedMovie,
      upcomingMovie,
      addtowatchlist,
      WatchList,
      setWatchList,
      removeFromWatchlist,
      details,
      loading,
      error,
    ]
  );

  // Return the API context provider component
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

// Export the API context
export default ApiContext;
