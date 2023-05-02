import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import banner from '../assets/banner-3.jpg'
import { Container, Image } from 'react-bootstrap';
import './Main.css'
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='bg-image d-flex align-items-center'>
                <Container className=''>
                    <div >
                      <p className='taste'>Taste</p>
                      <p className='fw-bold text-white heading-banner'>DELICIOUS FOOD 
                     <br />& FRESH FOOD </p>
                     <p className='taste'>ft.Italy</p>
                    </div>
                    
                </Container>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;