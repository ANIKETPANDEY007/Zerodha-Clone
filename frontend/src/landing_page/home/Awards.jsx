import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/media/images/largestBroker.svg' alt="" />
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>Trading and investment platform in India with over 1 crore+ active customers.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Future and options</p>
                        </li>
                        <li>
                            <p>Commodities derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;