import React from 'react';

const Images = (props) =>{
    const {previewURL,views,likes,user,largeImageURL} = props.images;
return(
    <div className="col-6 col-sm-4 col-md-3">
     <div className="card mt-5">
         <a href={likes} className="text-white bg-info disabled nav-link"> Dueño: {user} </a>
         <img className="card-img-top" src={previewURL}/>
            <div className="card-body">
                <p className="card-text">{likes} Me Gusta</p>
                <p className="card-text">{views} Vistas</p>
                <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
            </div>
     </div>      
    </div>
    
)

}

export default Images;
