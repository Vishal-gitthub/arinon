import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { DataProvider } from './Digital_Arinon/Portfolio/Context.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter future={{ v7_startTransition: true }}>
        <StrictMode>
            <DataProvider>
                <App />
            </DataProvider>
        </StrictMode>
    </BrowserRouter>,
);
