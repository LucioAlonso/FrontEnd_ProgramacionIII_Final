import React from "react";
import './Input.css';

const Input = ({attribute, handleChange, param}) => {
    return(
        <div className= 'container-input-general'>
            <input 
                id={attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={ (e) => handleChange(e.target.name, e.target.value)}  //manejo de estados
                className= {param ? 'input-error' : 'container-input'}
            />
        </div>
    )
};

export default Input;