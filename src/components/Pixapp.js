import React,{Component} from 'react';
import Search from './Search';
import Pagination from './Pagination';

import axios from 'axios';
import {URLKEY} from './constants';
import List from './List';


class Pixapp extends Component{

    state = {
        images : [],
        page : 1,
        search:''
    }
   
    searchForm=(search)=>{
    const page= this.state.page;
    axios.get(URLKEY+`&q=${search}&per_page=50&page=${page}`)
    .then(res=>{
        console.log(res.config.url)
        this.setState({
            images : res.data.hits,
            search
        })
    })

   }

   nextPage= ()=>{
    let page = this.state.page;
    page += 1;
    this.setState({
        page
    },()=>{
        const search=this.state.search;
        this.searchForm(search);
        this.scroll();
    });
   }

   beforePage = ()=>{
    let page = this.state.page;
    if(page === 1) return null;
    page -= 1;
    this.setState({
        page
    },()=>{
        const search=this.state.search;
        this.searchForm(search);
        this.scroll();
    });
   }
   
   scroll = ()=>{
       const element = document.querySelector('.jumbotron');
       element.scrollIntoView('auto','start');
   }
   
    render(){
        return(
            <div>
               <Search
                searchForm = {this.searchForm}
               /> 

               <List
                lists = {this.state.images}
               />
                 <Pagination
                 nextPage = {this.nextPage}
                 beforePage= {this.beforePage}
                 
                 />
            </div>
        )
    }
}

export default Pixapp;