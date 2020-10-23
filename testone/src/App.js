import React from 'react';
// ROUTER
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Router from './router'

function App() {
  return (
    <BrowserRouter>
      <div className="App page page-web">
        <Layout>
          <Router />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
