
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import SeriesView from './views/SeriesView';
import CharacterDetailView from './views/CharacterDetailView';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/series/:seriesId" element={<SeriesView />} />
          <Route path="/series/:seriesId/character/:characterId" element={<CharacterDetailView />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
