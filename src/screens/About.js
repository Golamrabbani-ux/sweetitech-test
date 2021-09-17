import React from 'react'
import aboutImage from '../assests/image/about.png'

const About = () => {
    return (
        <div className='container'>
            <div className='row text-center align-items-center' style={{height: '80vh'}}>
                <div className='col-md-6'>
                    <div>
                        <h1 className='title text-danger'>ABOUT PAGE</h1>
                        <h6 className='small-title'>Access any one user</h6>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img 
                        src={aboutImage} 
                        alt="about page" 
                        className='img-fluid'
                    />
                </div>
            </div>
        </div>
    )
}

export default About
