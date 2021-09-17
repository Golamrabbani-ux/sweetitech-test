import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { userLogin } from '../redux/action/userAction';

const Login = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const {userInfo} = useSelector(state => state?.userLogin);
    const { register, handleSubmit, formState: { errors } } = useForm();

    let { from } = location.state || { from: { pathname: "/" } }

    useEffect(()=>{
        if(userInfo?.email){
            history.replace(from);
        }
    },[from, history, userInfo]);

    const onSubmit = data => {
        const payload = {
            name: 'Golam Rabbani',
            image: 'https://avatars.githubusercontent.com/u/61206200?s=400&u=477f6382fda67fe4918f0a3c23356f7c6ebcab46&v=4',
            email: data?.email,
            password: data?.password,
            isAdmin: data?.admin
        }
        dispatch(userLogin(payload));
        // history.replace(from);
    };



    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className='col-6'>
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input 
                                name='email' 
                                id='email'
                                type='text' 
                                className='form-control'
                                placeholder='Enter Your Email Address'
                                {...register("email", { 
                                    required:"Email is required", pattern:{
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email."
                                    }
                                })}
                            />
                            <span className="text-danger">{errors?.email?.message}</span>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                name='password' 
                                id='password'
                                type='password' 
                                className='form-control'
                                placeholder='Password'
                                {...register("password", { 
                                    required: "Password is required.",
                                    minLength: 5,
                                    maxLength: 10 
                                })}
                            />
                            <span className="text-danger">{errors?.password?.message}</span>
                            {errors?.password && errors?.password.type === "minLength" && <span className="text-danger">Password must be at least 5 characters long.</span>}
                            {errors?.password && errors?.password.type === "maxLength" && <span className="text-danger">Purrent password can be max 10 characters long.</span> }
                        </div>

                        <div className="mb-3">
                            <input 
                                name='admin' 
                                id='admin'
                                type='checkbox'
                                {...register("admin")}
                            />
                            <label htmlFor="admin" className="form-label ms-2">Admin</label>
                        </div>
                            
                        <button 
                            type='submit'
                            className="btn btn-primary"
                        >
                            Save
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
