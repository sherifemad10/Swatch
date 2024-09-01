import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import TvSeries from "../Pages/TvSeries/TvSeries";
import WatchList from "../Pages/Watchlist/WatchList";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import TvDetails from "../Pages/TvDetails/TvDetails";
import NotFound from "../Pages/NotFound/NotFound";

const ROUTER = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "Movies", element: <Movies /> },
      { path: "TvSeries", element: <TvSeries /> },
      { path: "WatchList", element: <WatchList /> },
      { path: "/movie/:id", element: <MovieDetails /> },
      { path: "/tv/:id", element: <TvDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(ROUTER);
