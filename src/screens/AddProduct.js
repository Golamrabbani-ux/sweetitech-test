import React, { useEffect } from 'react'
import shortId from 'shortid';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar'
import { addProduct } from '../redux/action/productAction';
import { useHistory } from 'react-router-dom';
import { PRODUCT_RESET } from '../redux/constants';

const AddProduct = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { success } = useSelector(state => state?.productList);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        if(success){
            dispatch({ type: PRODUCT_RESET});
            history.push('/dashboard');
        }
    },[dispatch, history, success])

    const onSubmit = product => {
        const payload = {
            ...product,
            id: shortId.generate(),
            image: 'https://motherboarddb.com/media/images/Gigabyte/GA-A320M-S2H/GA-A320M-S2H-1.png'
        }
        dispatch(addProduct(payload));
    };


    return (
        <div className='container mt-5'>
            <div className="row">

                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-8">
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <button 
                            className="btn btn-secondary btn-sm px-4"
                            onClick={()=> history.push('/dashboard')}
                        >
                            Go Back
                        </button>
                        <h3>Add Product</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <input 
                                name='name' 
                                type='text' 
                                className='form-control'
                                placeholder='Product name'
                                {...register("name", { required: "Product name is required" })}
                            />
                            <span className="text-danger">{errors?.name?.message}</span>
                        </div>

                        <div className="mb-3">
                            <input 
                                name='price' 
                                type='number' 
                                className='form-control'
                                placeholder='Product price'
                                {...register("price", { required: "Product price is required" })}
                            />
                            <span className="text-danger">{errors?.price?.message}</span>
                        </div>

                        <div className="mb-3">
                            <input 
                                name='type' 
                                type='text' 
                                className='form-control'
                                placeholder='Product type'
                                {...register("type", { required: "Product type is required" })}
                            />
                            <span className="text-danger">{errors?.type?.message}</span>
                        </div>

                        <button 
                            className="btn btn-primary btn-sm px-4"
                            type="submit"
                        >
                            Submit
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
