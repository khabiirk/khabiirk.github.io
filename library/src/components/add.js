import React from 'react';
import './add.css'

export class Add extends React.Component {
    formOpener() {
        const f = document.getElementById('f');
        if(f.style.display == 'none'){
            f.style.display = 'block';

        } else {
            f.style.display = 'none';
            f.reset();
        }

        
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        let Title = data.get('title');
        let Author = data.get('author');
        let Pages = data.get('pages');
        let Read = data.get('read');

        this.props.addBook({ title: Title,
            author:Author,
            pages:Pages,
            read:Read
        }
            );
    }
    render() {
        return(
            <div className='form-container'>
            <form id='f' onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' name='title' required/>
                <label htmlFor='Author'>Author:</label>
                <input type='text' id='Author' name='author' required/>
                <label htmlFor='Pages'>Pages:</label>
                <input type='number' min='1' id='Pages' name='pages' required/>
                <div >
                    <div >
                    Read?
                        <input type="radio" name="read" id="yes" value={true} />
                        <label htmlFor="yes">Yes</label>
                        </div>

                        <div >
                                <input type="radio" name="read" id="no" value={false}/>
                                <label htmlFor="no">No</label>
                            </div>

                </div>
                <button type="submit">Add</button>

            </form>
            <div className='con'>
        <button onClick={this.formOpener.bind(this)}><i className='material-icons a'>add</i></button>
        </div>
        </div>
        )
    }
}