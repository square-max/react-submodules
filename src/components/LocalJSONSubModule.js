import React from 'react'
import './LocalJSONSubModule.css'

const LocalJSONSubModule = (props) => {
    return(
        <div className="submodule local-json">

<h2>{props.song}</h2>
<li>{props.artist}</li>
<li>{props.number}</li>
<li>{props.appearance}</li>

        </div>
    )
}

export default LocalJSONSubModule