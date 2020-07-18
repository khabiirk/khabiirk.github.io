import React from 'react';
import './book.css';

export class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            read: this.props.read
        } 
    }
    handleSelect() {
        
        let status = this.state.read ? 0 : 1
        this.setState({
            read: status
        })

    }

    render() {
        let u;
        return(
        <div className='Book'>
            <i className="fa fa-bookmark-o tooltip" style = { {background: u = this.state.read ? "red" : "white"}} onClick={this.handleSelect.bind(this)}>
                <span className="tooltiptext">{this.state.read ? "Not yet" : "Read"}</span>
            </i>
            <div className = 'detail'>
            <h1 id="title">{this.props.title}</h1>
            <h3 id="author">By: {this.props.author}</h3>
            <div id="pages">Pages: {this.props.pages}</div>
            <button className='d' onClick={() => this.props.delete(this.props.title)}><i class="fa fa-trash-o delete"></i></button>
            </div>
            
        </div>
        )
    }


}