require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

import Card from './components/card';
import List from './components/list';
import ListContainer from './components/listcontainer';

class BoardContainer extends React.Component{
	constructor() {
        super();
        this.state = {
            lists: ['list 1']
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.removeThisList = this.removeThisList.bind(this);
    }
    onFormSubmit(newListTitle){
        this.setState({
            lists: [...this.state.lists, newListTitle]
        });
    }

    removeThisList(listIndex){
    	console.log('remove this list ' + listIndex);
    	this.setState({
    		lists: [
    			...this.state.lists.slice(0, listIndex),
    			...this.state.lists.slice(listIndex+1)
    		]
    	})
    }

    render() {
        return (
            <div className="boardcontainer">
                <Board 
                 lists={this.state.lists} 
                 onFormSubmit={this.onFormSubmit} 
                 removeThisList={this.removeThisList} 
                />
                
            </div>
        ); // return
    } // render
}

export function Board(props){
	let textInput;
	const lists = props.lists.map((listTitle, i) => <ListContainer title={listTitle} key={i} removeThisList={props.removeThisList} listIndex={i} /> );

	const onSubmitList = e => {
	    e.preventDefault()
	    const text = textInput.value
	    if (text) {
	      props.onFormSubmit(text)
	    } else {
	      props.onFormSubmit('no title') 	
	    }
	  }
    
	return (
        <div className="list">
        	{lists} 
        	<form id="addListContainer" onSubmit={onSubmitList}>
                <input placeholder="new list title" 
                    ref={input => textInput = input }
                />
                <button type="submit">Add List</button>
            </form>
        </div>
    ); // return
}






document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<BoardContainer />, document.getElementById('target'))
);