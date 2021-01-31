import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({value, type, handleClick, isGoogleSignIn}) => (
   
        <button className={`${isGoogleSignIn ? 'google-sign-in' : null} custom-button`} type={type} onClick={handleClick} >{value}</button>

)

export default CustomButton;