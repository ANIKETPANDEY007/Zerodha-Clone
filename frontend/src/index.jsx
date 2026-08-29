import React from 'react' ;
import ReactDom from 'react-dom/client' ;

const root = ReactDom.createRoot(document.getElementById('root')) ;

root.render(
    <StrictMode>
        <div>
            <h1>Hello World</h1>
        </div>
    </StrictMode>
)
