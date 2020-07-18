import React from 'react';
import { Book } from './Book';
import { Add } from './add';
import './BookList.css';

export class BookList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state =  {
            BookArray: this.props.list,
            s: this.props.arr 
        }
        //this.showingBooks = this.props.query === '' ? this.props.list : this.props.list.filter((b) => b.title.toLowerCase().includes(this.props.query.toLowerCase()))
        
    }

    
   
    render() {
        let b;
        const showingBooks = this.props.query === '' ? this.props.list : this.props.list.filter((b) => b.title.toLowerCase().includes(this.props.query.toLowerCase()))
        //console.table(this.props.query === '' ? this.props.list : this.props.list.filter((b) => b.title.toLowerCase().includes(this.props.query.toLowerCase())));
       
        return (
            <div className='container'>
            
           
            {showingBooks.map((value, index) => {
               
               return <Book key={index} title={value.title} author={value.author} pages={value.pages} read={value.read} delete={this.props.delete}/>
           }
           


           )
           
           }
            <Add addBook={this.props.add}/>
             </div>
        )
    }
}