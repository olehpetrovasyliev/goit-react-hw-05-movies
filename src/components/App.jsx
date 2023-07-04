import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { NavBar } from '../pages/NavBar/NavBar';
import Reviews from '../pages/MovieDetails/Reviews/Reviews';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from '../pages/MovieDetails/Casts/Cast';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="/movies/" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
