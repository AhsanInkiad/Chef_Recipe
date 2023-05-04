import React, { useEffect, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import banner from '../assets/banner-3.jpg'
import { AiFillLike } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { CiForkAndKnife } from "react-icons/ci";





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
                                            <button class="button2 mt-4">
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
                                            <button class="button2 mt-4">
                                                View Recipe
                                            </button>
                                        </Link>

                                    </div>

                                </div>)



                        }
                    </div>


                </Container>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;