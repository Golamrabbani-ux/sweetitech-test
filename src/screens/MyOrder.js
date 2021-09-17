import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar'

const MyOrder = () => {
    const history = useHistory();
    const { orders } = useSelector(state => state?.myOrder)

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
                        <h3>My Order</h3>
                    </div>
                    <h3>Your Total Order: {orders?.length}</h3>
                    <Table responsive hover border-less={"true"}>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Order Id</th>
                                <th>Date</th>
                                <th>User Name</th>
                                <th>Total Product Order</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {
                                orders?.map((order, index) =>
                                    <tr key={order?.id}>
                                        <td>{index+1}</td>
                                        <td>{order?.id}</td>
                                        <td>{order?.date}</td>
                                        <td>{order?.userInfo?.name}</td>
                                        <td>{order?.totalItems?.length}</td>
                                    </tr>
                                )
                            } 
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    )
}

export default MyOrder
