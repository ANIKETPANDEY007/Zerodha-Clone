import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/media/images/largestBroker.svg' alt="" />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='fs-2'>Largest stock broker in India</h1>
                    <p className='mt-3 mb-5'>Trading and investment platform in India with over 1 crore+ active customers.</p>
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
                    <img src="media/images/pressLogos.png" style={{width : "90%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;