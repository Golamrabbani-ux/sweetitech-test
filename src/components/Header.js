import React  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap'
import { userLogout } from '../redux/action/userAction';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {cartItems} = useSelector(state => state?.cart);
    const {userInfo} = useSelector(state => state?.userLogin);

    const handleNavigate = (link) =>{
        history.push(link)
    }


    return (
        <Navbar bg="dark" variant="dark" expand="sm" color="white">
            <Container>
                <Navbar.Brand 
                    onClick={() => handleNavigate('/')}
                >
                    Ecommerce website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => handleNavigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => handleNavigate('/shop')}>Shop</Nav.Link>
                        <Nav.Link onClick={() => handleNavigate('/about')}>About</Nav.Link>
                        <Nav.Link onClick={() => handleNavigate('/admin')}>Admin</Nav.Link>
                    </Nav>
                    <div 
                        className="badge-area pointer"
                        onClick={() => handleNavigate('/cart')}
                    >
                        <i className="fas fa-cart-plus"></i>
                        <span className="custom-badge">{cartItems?.length}</span>
                    </div>
                    {
                        userInfo?.email && 
                        <div 
                            className="d-flex align-items-center me-3 pointer"
                            onClick={()=>handleNavigate('/dashboard')}
                        >
                            <img className="avater" src={userInfo?.image} alt={userInfo?.name} />
                            <h6 className="text-white ms-1">{userInfo?.name}</h6>
                        </div>
                    }
                    {
                        userInfo?.email ? 
                        <button 
                            className="btn login-btn"
                            onClick={()=> dispatch(userLogout())}
                        >
                            Logout
                        </button>
                        :
                        <button 
                            className="btn login-btn"
                            onClick={() => handleNavigate('/login')}
                        >
                            Login
                        </button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
