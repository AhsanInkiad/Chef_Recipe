import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import banner from '../assets/banner-3.jpg'
import { AiFillLike } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { CiForkAndKnife } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";







import { Container, Image } from 'react-bootstrap';
import './Main.css'
import { Link, Outlet } from 'react-router-dom';
const Main = () => {


    const [chefData, setChefData] = useState([]);
    const [chefData2, setChefData2] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefData(data.slice(0, 3)))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefData2(data.slice(3, 6)))
    }, [])


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

                <Outlet></Outlet>

            </div>
            <div className='sections-1'>
                <Container className='quotes-container my-5'>
                    <div className="cards">
                        <div>
                            <div className="quote">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height="80" width="80">
                                    <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"></path>
                                </svg>
                            </div>
                            <div className="body-text mt-3">"Italian food is all about ingredients, and <br /> it's not fussy and it's not fancy."</div>
                            <div className="author">- by Wolfgang Puck <br />  </div>
                        </div>

                    </div>
                    <div className="cards">
                        <div>
                            <div className="quote">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height="80" width="80">
                                    <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"></path>
                                </svg>
                            </div>
                            <div className="body-text mt-3">"Italian food is like a love affair. It's <br /> intense, it's passionate, and it's forever." </div>
                            <div className="author">- by Marco Pierre White  </div>

                        </div>

                    </div>
                    <div className="cards">
                        <div>
                            <div className="quote">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height="80" width="80">
                                    <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"></path>
                                </svg>
                            </div>
                            <div className="body-text mt-3">"Italian food is of flavor and history.Dish <br />
                                tells story, every meal is an experience." </div>
                            <div className="author">- by Massimo Bottura </div>

                        </div>

                    </div>

                </Container>
            </div>
            <div className='py-5 chef-card-div' >
                <p className='text-center taste mt-5'>" Behind every great meal is a talented chef "</p>
                <p className='text-center fw-bold fs-1 heading-banner'>Meet The Chefs </p>
                <p className='text-center fw-bold fs-1 heading-banner mb-5'><GiCook></GiCook>  </p>
                <Container className='py-5 '>
                    <div className='cardholder'>
                        {
                            chefData.map(chef =>
                                <div key={chef.id}>
                                    <div className='chief-der-card '>
                                        <div className="ccard">
                                            <div className="ccontent">
                                                <div className="back">
                                                    <div className="back-content">
                                                        <img className='card-cover-pic' src={chef.chefPicture} alt="" />
                                                        <strong>Hover Me</strong>
                                                    </div>
                                                </div>
                                                <div className="front">
                                                    <div className="img">
                                                        <div className="circle">
                                                        </div>
                                                        <div className="circle" id="right">
                                                        </div>
                                                        <div className="circle" id="bottom">
                                                        </div>
                                                    </div>

                                                    <div className="front-content">
                                                        <small className="badge py-2 "><AiFillLike></AiFillLike> {chef.likes} likes<br /> <br />
                                                            <GiCook></GiCook> {chef.yearsOfExperience} years experience <br /> <br />
                                                            <CiForkAndKnife></CiForkAndKnife> {chef.numberOfRecipes} recipe </small>
                                                        <div className="description">
                                                            <div className="title">
                                                                <p className="title">
                                                                    <strong>{chef.chefName}</strong>
                                                                </p>
                                                                <SiCodechef></SiCodechef>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Link to={`/${chef.id}`}>
                                            <button className="button2 mt-4">
                                                View Recipe
                                            </button>
                                        </Link>
                                    </div>

                                </div>)



                        }
                    </div>

                </Container >

                <Container className='py-5'>

                    <div className='cardholder'>
                        {
                            chefData2.map(chef =>
                                <div key={chef.id}>
                                    <div className='chief-der-card '>
                                        <div className="ccard">
                                            <div className="ccontent">
                                                <div className="back">
                                                    <div className="back-content">
                                                        <img className='card-cover-pic' src={chef.chefPicture} alt="" />
                                                        <strong>Hover Me</strong>
                                                    </div>
                                                </div>
                                                <div className="front">
                                                    <div className="img">
                                                        <div className="circle">
                                                        </div>
                                                        <div className="circle" id="right">
                                                        </div>
                                                        <div className="circle" id="bottom">
                                                        </div>
                                                    </div>

                                                    <div className="front-content">
                                                        <small className="badge py-2 "><AiFillLike></AiFillLike> {chef.likes} likes<br /> <br />
                                                            <GiCook></GiCook> {chef.yearsOfExperience} years experience <br /> <br />
                                                            <CiForkAndKnife></CiForkAndKnife>  {chef.numberOfRecipes} recipe </small>
                                                        <div className="description">
                                                            <div className="title">
                                                                <p className="title">
                                                                    <strong>{chef.chefName}</strong>
                                                                </p>
                                                                <SiCodechef></SiCodechef>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <Link to={`/${chef.id}`}>
                                            <button className="button2 mt-4">
                                                View Recipe
                                            </button>
                                        </Link>

                                    </div>

                                </div>)



                        }
                    </div>


                </Container>


            </div>

           

            <div className='section-2'>
            <Container className='quotes-container py-5'>
                    <div className="cards">
                        <div>
                            <div className="quote">
                                <p className='text-center big-icon text-white'><SiCodechef></SiCodechef></p>
                            </div>
                            <div className="body-text text-white mt-3">We use fresh, high-quality ingredients and to cook <br /> 
                            with simplicity and respect.</div>
                           
                        </div>

                    </div>
                    <div className="cards">
                        <div>
                            <div className="quote">
                            <p className='text-center big-icon kola'><IoFastFoodOutline></IoFastFoodOutline></p>
                            </div>
                            <div className="body-text mt-3"><span className='kola'>Food is not just eating energy. It's an experience.</span>  </div>
                           

                        </div>

                    </div>
                    <div className="cards">
                        <div>
                            <div className="quote">
                            <p className='text-center big-icon text-white'><GiCook></GiCook></p>
                            </div>
                            <div className="body-text text-white mt-3">Our chefs are passionate about their craft and <br /> their cuisine, and they have a deep respect 
                           <br /> for tradition and quality ingredients. </div>
                            

                        </div>

                    </div>

                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;