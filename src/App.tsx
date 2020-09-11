import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { Layout } from './Components/Layout';

function App() {

  return (
    <div>

      <BrowserRouter>
        <Layout>
          <Routes/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
