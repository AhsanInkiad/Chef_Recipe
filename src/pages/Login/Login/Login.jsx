import React, { useContext, useState } from 'react';
import './Login.css'
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
const Login = () => {
    const [err, setErr] = useState('');
    const {user,setUser,signIn} = useContext(AuthContext);
    
    const [profile, setProfile] = useState(null);
    
    const navigate = useNavigate();

    const auth = getAuth(app);
    const provider =new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();
    
   
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);

            setProfile(loggedUser);
            console.log(loggedUser);
            navigate('/');
            setErr('');
            event.target.reset();
        })
        .catch(error =>{
            const errors = error.message;
            setErr(errors.slice(9,)); 
        })
    }

    const handleGoogleSignIn = event =>{
        signInWithPopup(auth, provider)
            .then(result =>{
                const Guser = result.user;
                setProfile(Guser);
                setUser(Guser);
                navigate('/');
            })
            .catch(error =>{
                console.log(error);
            })
    }

    const handleGithubSignIn = event =>{
        signInWithPopup(auth, provider2)
            .then(result =>{
                const Gituser = result.user;
                setProfile(Gituser);
                setUser(Gituser);
                navigate('/');
            })
            .catch(error =>{
                console.log(error);
            })
    }


    return (
        <div className='loginpage py-5'>
            <Container>
                <div className=" mx-auto form-container">
                    <p className="title">Login</p>
                    <form className="form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label for="username">Login</label>
                            <input type="email" name="email" id="username" placeholder="Enter your email" required/>
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" required />

                        </div>
                        <p className='text-danger'><small>{err}</small></p>
                        <button className="sign mt-3">Log in</button>
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                        <p className="message">Login with social accounts</p>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>

                        <button onClick={ handleGithubSignIn} aria-label="Log in with GitHub" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="signup">Don't have an account? <span> </span>
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </Container>

        </div>
    );
};

export default Login;