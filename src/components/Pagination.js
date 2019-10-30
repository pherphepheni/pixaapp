import React from 'react';

const Pagination = (props)=>{
    return(
        <div className="row py-5 justify-content-center">
            <button type="button" className="btn btn-info mr-1" onClick={props.beforePage}>Anterior &larr;</button>
            <button type="button" className="btn btn-info mr-1" onClick={props.nextPage}>Siguiente &rarr;</button>
           
        </div>
    )
}
export default Pagination;