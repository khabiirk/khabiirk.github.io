import React from 'react';
import './App.css';
import { BookList } from './components/BookList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Default value
      BookArray : [{
                    title: 'The Hunger Games',
                    author: 'Suzanne Collins',
                    pages: 374,
                    read: true,
      },
                  {
                    title: 'Catching Fire',
                    author: 'Suzanne Collins',
                    pages: 391,
                    read: false
      },
                  {
                    title: 'Mockingjay',
                    author: 'Suzanne Collins',
                    pages: 390,
                    read: false
      }
    ],
      
      searchTerm: '',



    }
    this.search = this.search.bind(this);
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    
    
  }
  EditSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value,
      
    })

  }

  search() {
    //console.table(this.state.BookArray.filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
    return this.state.BookArray.filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }
  addBook(b) {
    const copy = this.state.BookArray.slice();
    copy.push(b);
    //console.table(copy);
    this.setState({
        BookArray: copy
    })
    
}
deleteBook(b) {
  const { BookArray } = this.state;
  let offendingTitle = b;
		this.setState({
			BookArray: BookArray.filter((book) => {
				return book.title !== offendingTitle;
			}),
		});
}
  
  render() {
  const list = this.state.BookArray;
  return (
    <div className="App">
    <div className='navBar'>
    <h1>Library</h1>
    <div className='search-bar'>
      <span><i className='material-icons s'>search</i></span>
      <input type='text' className='search' value = {this.state.searchTerm} onChange= { this.EditSearchTerm.bind(this)} placeholder='Search for a book!' />
    </div>
    </div>
    <div className='panel'>
      <BookList list={this.state.BookArray} query={this.state.searchTerm} add={this.addBook} delete={this.deleteBook}/>
    </div>
    </div>
  );
}
}

export default App;
