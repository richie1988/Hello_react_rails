import "@hotwired/turbo-rails";
import "./controllers";
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar/navigation';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <h1>React Client Side Rendering</h1>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page" element={<Navbar />} />
      </Routes>
    </Router>
  </Provider>
);