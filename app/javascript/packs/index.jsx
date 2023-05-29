// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import configureStore from '../store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  const root = ReactDOM.createRoot(document.getElementById('homepage'))

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
