import React from 'react';
import { useSelector } from 'react-redux';
import adminImage from '../assests/image/admin.png'

const Admin = () => {
    const {userInfo} = useSelector(state => state?.userLogin);

    return (
        <div className='container'>
            <div className='row text-center align-items-center' style={{height: '80vh'}}>
                <div className='col-md-6'>
                    {
                        userInfo?.isAdmin ? 
                        <div>
                            <h1 className='title text-danger'>WELLCOME TO</h1>
                            <h1 className='title text-danger'>ADMIN PAGE</h1>
                            <h6 className='small-title'>Access any one user</h6>
                        </div>
                        :
                        <div>
                            <p>
                                Admin page access only admin user.<br />
                                Now you can logout and again login with admin checed.
                            </p>
                        </div>
                    }
                </div>
                <div className='col-md-6'>
                    <img 
                        src={adminImage} 
                        alt="about page" 
                        className='img-fluid'
                    />
                </div>
            </div>
        </div>
    )
}

export default Admin
