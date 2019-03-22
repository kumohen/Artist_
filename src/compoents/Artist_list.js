import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList = (props)=> {

    const list = ({allArtists})=>{
        if(allArtists){
            return allArtists.map(item =>{
                const style ={
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return (
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item" style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        } 
    }
        return (
            <div className="artist_list">
                <div>The Artists</div>
                {list(props)}
            </div>
        )
  
}

export default ArtistList;
