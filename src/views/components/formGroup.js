import React from 'react';

const FormGroup = (props) => {
    return ( 
    <>
    
    <div className="form-group">
                 <label htmlFor={props.htmlFor} className="form-label mt-4">{props.label}</label>
                    {props.children}
                   
    </div>

    </> );
}
 
export default FormGroup;


