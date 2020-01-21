import React from 'react';
import '../../styles/custom-button.scss'
const CustomButton = ({children,...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>{children}</button>
    );
    }
export default CustomButton;
