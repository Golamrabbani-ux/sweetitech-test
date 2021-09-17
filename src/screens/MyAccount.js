import React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MyAccount = () => {
    const history = useHistory();

    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-9">
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <button 
                            className="btn btn-secondary btn-sm px-4"
                            onClick={()=> history.push('/dashboard')}
                        >
                            Go Back
                        </button>
                        <h3>My Account</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyAccount
