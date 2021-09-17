import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { deleteProduct } from '../redux/action/productAction'

const AllProducts = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {products} = useSelector(state => state?.productList);

    const handleNavigate = (link) =>{
        history.push(link);
    }
    

    return (
        <div className='container mt-5'>
            <div className="row">

                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className="col-md-8">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>All Products</h4>
                        <button 
                            className="btn btn-primary btn-sm"
                            onClick={()=> handleNavigate('/dashboard/product/add')}
                        >
                            Add Product
                        </button>
                    </div>
                    <div className="my-3">
                        <Table responsive hover border-less={"true"}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.length > 0 ? 
                                    products?.map(product => 
                                        <tr key={product?.id}>
                                            <td>{product?.name}</td>
                                            <td>${product?.price}</td>
                                            <td>{product?.type}</td>
                                            <td>
                                                <i 
                                                    className="far fa-edit pointer"
                                                    onClick={()=> handleNavigate(`/dashboard/product/${product?.id}/edit`)}
                                                />
                                                <i 
                                                    onClick={() => dispatch(deleteProduct(product?.id))}
                                                    className="fas fa-trash ms-2 text-danger pointer" 
                                                />
                                            </td>
                                        </tr> 
                                    )
                                    :
                                    <div className="text-center">
                                        <h1>No Products</h1>
                                    </div>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllProducts;