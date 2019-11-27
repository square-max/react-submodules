import React, {useState} from 'react'
import RickMorty from '../files/rickmorty'
import Character from './Character'


const Characters = () => {
   
    const [charaters, setCharacters] = useState(RickMorty.results)
    
    return(
        <div className="submodule rickmorty">

        <h2>This module presents charaters from rick and morty</h2>
        {
            charaters.map(
                (c, i) => 

            <Character origin={c.origin.name} key={i} name={c.name} img={c.image} gender={c.gender} status={c.status} />
                
            )
        }
        
                </div>
    )
}


export default Characters