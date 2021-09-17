import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

const TotalSoldProduct = () => {
    const history = useHistory();
    const { products } = useSelector(state => state?.soldProductList);

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
                        <h3>Total Sold Product</h3>
                    </div>
                    <div className="my-3">
                        <Table responsive hover border-less={"true"}>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.length > 0 ? 
                                    products?.map((product, index) => 
                                        <tr key={product?.id}>
                                            <td>{index+1}</td>
                                            <td>{product?.id}</td>
                                            <td>{product?.name}</td>
                                            <td>${product?.price}</td>
                                            <td>{product?.type}</td>
                                            <td></td>
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

export default TotalSoldProduct
