import React from 'react'
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
            <div className=''>
                <h1>404!</h1>
                <h4>Page not found.</h4>
                <button 
                    className='btn btn-danger btn-md'
                    onClick={()=>history.push('/')}
                >
                    Home
                </button>
            </div>
        </div>
    )
}

export default NotFound

