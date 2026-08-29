import React from 'react';
import Navbar from '../Navbar';
import RightSection from './RightSection';
import Universe from './Universe';
import LeftSection from './LeftSection';
import Hero from './Hero';
import Footer from '../Footer';
function ProductPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
            <Footer/>
        </>
     );
}

export default ProductPage;