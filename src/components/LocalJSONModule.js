import React, {useState} from 'react'
import mtv from '../files/mtv'
import LocalJsonSubModule from './LocalJSONSubModule'
import './LocalJSONModule.css'


const LocalJSONModule = () => {
   const[videos, setVideos] = useState(mtv.videos)
   const filtervideos = (e) => {
       setVideos (
        mtv.videos.filter( video => video.song.toLowerCase().includes(e.target.value) )
       )
    } 


    return(
        <div className="submodule local-json">

        <h2>This Module uses data from a local JSON file</h2>
        <p>And the videos on the first mtv broadcast was:</p>
        <input type='text' placeholder='name song' onInput={filtervideos} />
        <div className="videos">
        {
            videos.map(
                video => <LocalJsonSubModule 
                song={video.song}
                artist={video.artist}
                number={video.number}
                appearance={video.appearance}
                />
            )
            
        }
        </div>
        
                </div>
    )
}


export default LocalJSONModule