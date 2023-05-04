import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefData.css'
import { Button, Container, Toast } from 'react-bootstrap';
import { AiFillLike } from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { CiForkAndKnife } from "react-icons/ci";
import Rating from 'react-rating';

import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefData = () => {

    const chefDetails = useLoaderData();
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, description, recipes } = chefDetails;
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const showToastMessage = () => { 
        setButtonDisabled(true);
        toast.success("Marked as favourite")
    };
    return (
        <div>
            <div className='details-banner py-5'>
                <Container className='py-5 d-flex justify-content-center'>
                    <img className='chef-bhai-pic' src={chefPicture} alt="" />

                </Container>
                <p className='text-center text-white fs-5'>  | {description} |</p>
                <p className='text-center text-white fs-2'> <span className='spanshomuho'> Name:</span> {chefName}</p>
                <p className='text-center text-white fs-4'> <span className='spanshomuho'><AiFillLike></AiFillLike></span>  {likes} likes</p>
                <p className='text-center text-white fs-4'> <span className='spanshomuho'><CiForkAndKnife></CiForkAndKnife></span>  {numberOfRecipes} recipes</p>
                <p className='text-center  text-white fs-4'> <span className='spanshomuho'><GiCook></GiCook></span>  {yearsOfExperience} years experience</p>

            </div>
            <div className='details-cardgulo'>
            <p className='taste recipe-tag text-center fs-1 pt-5'>Recipe :</p>
                <Container className='container-card-holder'>
                    {
                        chefDetails.recipes.map(recipe =>
                            <div className='cc '>
                                <div className='py-5'>
                                    <div class="caard my-5">
                                        <div className=' '>
                                            <img className='mt-4 recipe-er-pic' src={recipe.recipePicture} alt="" />
                                            <p className='ms-2 mt-3'>"{recipe.recipeName}"</p>
                                            <Rating className='ms-2 rate mb-3'
                                                placeholderRating={recipe.rating}
                                                readonly
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar></FaStar>}
                                                fullSymbol={<FaStar></FaStar>}
                                            ></Rating>

                                            <p className='ms-2'>Ingredients:</p>

                                            {
                                                recipe.ingredients.map(ingreds => <li className='ms-4'>{ingreds}</li>)
                                            }
                                            <Button  disabled={buttonDisabled} onClick={showToastMessage} className='ms-2 mt-3' variant="dark">Favourite</Button>
                                           



                                        </div>


                                    </div>
                                </div>


                            </div>)
                    }
                </Container>
                <ToastContainer></ToastContainer>


            </div>




        </div>
    );
};

export default ChefData;