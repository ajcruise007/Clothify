import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {currentUser ? 
                <div className="option" onClick={async () => await auth.signOut()}>sign out</div> : <Link to="/sign-in" className="option ">sign in</Link>}  
                {/* <Link to="/shop">Shop</Link> */}
                <CartIcon></CartIcon>
            </div>
            {hidden ? null : <CartDropdown />}
            {/* <CartDropdown /> */}
    </div>
)

const mapStatetoProps = state => (
    {currentUser: state.user.currentUser,
        hidden: state.cart.hidden
    }
)

export default connect(mapStatetoProps)(Header);