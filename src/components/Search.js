import React,{Component} from 'react';
class Search extends Component{
 
    searchRef=React.createRef();
    searchForm=(e)=>{
        e.preventDefault();
      const search =  this.searchRef.current.value;
      
      this.props.searchForm(search);
    }
 
    render(){
        return(
            <div className="jumbotron text-center">
                 <h1>Pixabay API</h1>
                <div className="row justify-content-center mt-5">            
                <form className="form-inline my-2 my-lg-0" onSubmit={this.searchForm}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search..." ref={this.searchRef} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
                </div>   
            </div>
        )
    }
}

export default Search