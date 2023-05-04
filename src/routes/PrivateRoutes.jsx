import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className='d-flex justify-content-center '>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>


    }
    if (user) {
        return children;
    }
    return <Navigate to="login" replace={true}></Navigate>

};

export default PrivateRoutes;