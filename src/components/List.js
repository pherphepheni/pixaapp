import React,{Component} from 'react';
import Images from './Images';

class List extends Component{
    render(){
        
        return(
            <div className="col-12 p-5 row">
                {this.props.lists.map(list=>{
                  return(                
                        <Images
                            key = {list.id}
                            images = {list}
                        />
                  )
                })}
            
           
            </div>
        )
    }
}

export default List;