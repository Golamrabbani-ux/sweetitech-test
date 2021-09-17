import React from 'react'
import shortId from 'shortid';
import {useSelector, useDispatch} from 'react-redux';
import { Table, Button } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../redux/action/cartAction';
import { soldProduct } from '../redux/action/productAction';
import { useHistory } from 'react-router';
import { myOrder } from '../redux/action/myOrderAction';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cartItems } = useSelector(state => state?.cart);
    const { userInfo } = useSelector(state => state?.userLogin);

    const totalPrice = cartItems?.reduce( (total, product) => total + product?.price * product?.qty, 0);

    const handlePlaceOrder = () =>{
        if(!userInfo?.email){
            alert("Please Login")
        }else{
            const orderInfo = {
                userInfo,
                id:shortId.generate(),
                totalPrice:totalPrice,
                totalItems:cartItems,
                date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            }
            dispatch(myOrder(orderInfo))
            dispatch(soldProduct(cartItems));
            history.push('/dashboard/my-order');
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <Table responsive border-less={"true"}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems?.length > 0 ? 
                                    cartItems?.map(product => 
                                        <tr key={product?.id}>
                                            <td>{product?.name}</td>
                                            <td>{product?.price}</td>
                                            <td>
                                                <select
                                                    value={product?.qty}
                                                    onChange={(e) => {
                                                        dispatch(addToCart(product, Number(e.target.value)))
                                                    }}
                                                >
                                                    {
                                                        [...Array(7).keys()]?.map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        )
                                                    }
                                                </select>
                                            </td>
                                            <td>
                                                <Button 
                                                    className="btn btn-danger"
                                                    onClick={() =>{
                                                        dispatch(removeFromCart(product?.id))
                                                    }}
                                                >
                                                    Delete
                                                </Button> 
                                            </td>
                                        </tr> 
                                    )
                                    :
                                    <div className="text-center">
                                        <h1>Your Cart is Empty</h1>
                                        <Link to='/'>Shopping Now</Link>
                                    </div>
                                }
                            </tbody>
                    </Table>
                </div>
                <div className="col-md-4">
                    <h3>Total Item: {cartItems?.length}</h3>
                    <h3>Total Price: ${totalPrice}</h3>
                    <Button 
                        className="btn btn-primary"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
