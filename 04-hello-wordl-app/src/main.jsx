import React from 'react'; // imr: import react
import ReactDOM from 'react-dom/client'; // imrd: import react dom [debe ser react-dom/client]
import { App } from './App';

import './Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);