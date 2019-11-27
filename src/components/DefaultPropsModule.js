import React from 'react'

const DefaultPropsModule = (props) => {
    return(
        <div className="submodule">

        <h2>Basic props submodule</h2>
        <p>This is a module that recives a property from its parent (App.js). And the prop is: <b> {props.value} </b> But wait, there is no property! </p>
        <p>submodule a default prop <b>{props.value || 'I am a default value' }</b></p>
        
                </div>
    )
}

export default DefaultPropsModule