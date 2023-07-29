import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Home,
  Explore,
  Playlist,
  WatchLater,
  Videos,
  Video,
  SinglePlayList
} from './pages';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/playlists" element={<Playlist />} />
      <Route path="/watch-later" element={<WatchLater />} />
      <Route path="/videos/:category/:categoryId" element={<Videos />} />
      <Route path="/video/:videoName/:videoId" element={<Video />} />
      <Route path="/playlist/:playlistName/:playlistId" element={<SinglePlayList />} />

    </Routes>

  );
}

export default App;
