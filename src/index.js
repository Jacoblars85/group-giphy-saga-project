import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import store from './components/Redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
