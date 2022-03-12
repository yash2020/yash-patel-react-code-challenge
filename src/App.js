import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages import.
import HomePage from './pages/Home';
import UniversitiesPage from './pages/Universities';
import PostalLookupPage from './pages/PostalLookup';
import Layout from './component/Layout';


function App() {
  
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/postal-lookup" element={<PostalLookupPage />} />
        </Routes>
      </Layout>
  );

}

export default App;
