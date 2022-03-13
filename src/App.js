import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages import.
import HomePage from './pages/Home';
import UniversitiesPage from './pages/Universities';
import PostalLookupPage from './pages/PostalLookup';
import Layout from './component/Layout';
// Redux Files...
import { Provider } from 'react-redux';
import store from './component/redux/configureStore';

function App() {

  


  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/postal-lookup" element={<PostalLookupPage />} />
        </Routes>
      </Layout>
    </Provider>
  );

}

export default App;
