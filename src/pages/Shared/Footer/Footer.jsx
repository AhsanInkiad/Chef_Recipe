import React from 'react';
import './Footer.css'
import { FaAt,FaMobileAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer-bhai d-flex align-items-center py-4 '>
            <Container>
                <div className='d-flex justify-content-between gap-5'>
                    <div className='footer-box-1'>
                        <p className='text-white fs-2'><span className='footer-site-name'>TASTE OF </span>  ITALY</p>
                        <p className='mb-5 footer-lines'><small>Experience Italy with every bite! <br /> Savor the passion and flavor of <br /> authentic Italian cuisine.</small></p>
                    </div>
                    <div className='footer-box-2 ps-5 '>
                        <p className='footer-lines fs-4 mb-4'>Contact Us</p>
                        <p className='footer-lines'> <small><FaAt></FaAt> LaItalia@gmail.com <br /> <FaMobileAlt></FaMobileAlt> 011xxxxxxx <br /> <GoLocation></GoLocation> Plata a Plomo, Milan, Italy </small>  </p>
                    </div>
                </div>


                <div className='d-flex justify-content-center'>
                    <div className=''>
                        <div className="loading-spinner mb-5 ">
                            <div className="loading-spinner-inner">
                                <div className="loading-spinner-circle"></div>
                                <div className="loading-spinner-circle"></div>
                                <div className="loading-spinner-circle"></div>
                                <div className="loading-spinner-circle"></div>
                                <div className="loading-spinner-circle"></div>
                            </div>
                        </div>
                        <button className='call-btn mb-5'> We are waiting for you</button>


                    </div>
                </div>
                <p className=' text-center text-white'> <small>©Copyright: INKIAD</small> </p>



            </Container>

        </div>
    );
};

export default Footer;