import './App.scss';
import React, { useEffect } from 'react';
import { Filter } from './components/filter/Filter';
import { Content } from './components/content/Content';
import { DataProviders } from './providers/DataProviders';
import { RefreshButton } from './components/refreshButton/RefreshButton';


function App() {
  return (
    <div className="main">
      <DataProviders>
        <div className="container">
          <div className="container_context">
            <Filter/>
            <Content />
          </div>
            <RefreshButton />
        </div>
      </DataProviders>
    </div>
  );
}

export default App;