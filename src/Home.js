import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Cards from './Components/Cards'
import Carousels from './Components/Carousels';
const Home = () => {
    return (
        <>
            <Carousels />
            <Cards />
            <Footer />
        </>
    )
}
export default Home;
