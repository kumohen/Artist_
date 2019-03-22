import React from 'react';

//import {Link} from 'react-router-dom';

const AlbumList = (props)=> {
    const showList = ({albumList})=>{
        if(albumList){
            return albumList.map((item,index) =>{
                  return(
                       <img key={index} src={`/images/albums/${item.cover}.jpg`} alt={item.title} /> 
                  )    
            })
        }
    }
    return (
    <div className="albums_list">
        {showList(props)}
    </div>  
    );
  
}

export default AlbumList;
