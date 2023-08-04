import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {GitApiContext} from './components/gitApiContext';
import {IGitApiService} from "./services/interfaces";
import {GitApiService} from "./services/gitApiService";
import {App} from './App';
import './index.css';

const gitApiService: IGitApiService = new GitApiService();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <GitApiContext.Provider value={gitApiService}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </GitApiContext.Provider>
  </React.StrictMode>
);
