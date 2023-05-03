import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [err, setErr] = useState('');
    const {createUser}= useContext(AuthContext);
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);
        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            setErr('');
            event.target.reset();
        })
        .catch(error =>{
            const errorMessage = error.message;
            setErr(errorMessage.slice(9,));
        })
    }




    
    
    return (
        <div className='loginpage py-5'>
            <Container>
                <div className=" mx-auto form-container">
                    <p className="title">Register</p>

                    <form className="form" onSubmit={handleRegister}>
                        <div className="input-group">
                            <label for="name">Name</label>
                            <input type="name" name="name" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="input-group">
                            <label for="username">Email</label>
                            <input type="email" name="email" id="username" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" required />

                        </div>
                        <div className="input-group">
                            <label for="photo">Photo url</label>
                            <input className='photo-input' type="text" name="photo" id="photo" placeholder="Enter your photo url" />
                        </div>
                        <p className='text-danger'><small>{err}</small></p>
                        <button className="sign mt-3">Register</button>
                        

                    </form>


                    <p className="signup mt-3">Already have an account? <span> </span>
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </Container>

        </div>
    );
};

export default Register;