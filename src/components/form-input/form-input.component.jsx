import React from 'react';
import './form-input.styles.scss';

const FormInput = ({type, name, label, value, handleChange}) => (
    <div className="group">
        
        <input className="form-input" type={type} name={name} value={value} onChange={handleChange}></input>

        {label ? <label className={`${value ? 'shrink' : null} form-input-label`}>{label}</label> : null}
        
    </div>
)


export default FormInput;