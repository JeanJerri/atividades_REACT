import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/Header';

function App() {
  // Inicializa o estado de favoritos a partir do localStorage
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('movie-favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Salva os favoritos no localStorage sempre que a lista é alterada
  useEffect(() => {
    localStorage.setItem('movie-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Adiciona um filme à lista de favoritos, evitando duplicatas
  const addFavorite = (movie) => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  // Remove um filme da lista de favoritos
  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        
        <Route 
          path="/movie/:id" 
          element={
            <DetailsPage 
              favorites={favorites}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite} 
            />
          } 
        />
        
        <Route 
          path="/favorites" 
          element={<FavoritesPage favorites={favorites} />} 
        />
      </Routes>
    </div>
  );
}

export default App;