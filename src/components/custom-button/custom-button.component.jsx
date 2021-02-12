import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({value, type, handleClick, isGoogleSignIn, inverted}) => (
   
        <button className={` ${inverted ? 'inverted' : null} ${isGoogleSignIn ? 'google-sign-in' : null} custom-button`} type={type} onClick={handleClick} >{value}</button>

)

export default CustomButton;