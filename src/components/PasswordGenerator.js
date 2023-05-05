import React from 'react'

const PasswordGenerator = ({pass}) => {
    return (
        <div classname='showpass'>
            <h3 style={{color:'white'}}>{pass}</h3>
            <button className ='btn' onClick={() =>  navigator.clipboard.writeText(pass)}>Copy</button>
        </div>
    )
}

export default PasswordGenerator
