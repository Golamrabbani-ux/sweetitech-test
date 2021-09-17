import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Card, Button } from 'react-bootstrap'
import { addToCart } from '../redux/action/cartAction'

const ProductsList = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state?.productList);

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    products?.map((product, index) => 
                        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                            <Card className="card">
                                <Card.Img className='image' variant="top" src={product?.image} />
                                <Card.Body>
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Title as="h6">price: {product?.price}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build.
                                    </Card.Text>
                                    <Button 
                                        variant="primary"
                                        onClick={()=>dispatch(addToCart(product, 1))}
                                    >
                                        Add to cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductsList
