import React, { StrictMode } from 'react' ;
import ReactDom from 'react-dom/client' ;
import HomePage from './landing_page/home/HomePage';

const root = ReactDom.createRoot(document.getElementById('root')) ;

root.render(
    <StrictMode>
            <HomePage/>
    </StrictMode>
)
