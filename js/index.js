require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

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

function Board(props){
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

class ListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: ['cards[] placeholder ', 'cards[] placeholder 2']
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.removeThisCard = this.removeThisCard.bind(this);
    }

    onFormSubmit(textInput){
    	console.log('ListContainer textInput');
    	console.log(textInput);
        this.setState({
            cards: [...this.state.cards, textInput]
        });
    }

    removeThisCard(cardIndex){
    	console.log('remove this card ' + cardIndex);
    	this.setState({
    		cards: [
    			...this.state.cards.slice(0, cardIndex),
    			...this.state.cards.slice(cardIndex+1)
    		]
    	})
    }

    render() {
        return (
            <div className="listcontainer">
                <List
                 title={this.props.title || "list title"} 
                 cards={this.state.cards} 
                 onFormSubmit={this.onFormSubmit} 
                 removeThisCard={this.removeThisCard} 
                 removeThisList={this.props.removeThisList} 
                 listIndex={this.props.listIndex}
                />
                
            </div>
        ); // return
    } // render
}

function List(props) {
	let textInput;
	const cards = props.cards.map((card, i) => <Card text={card} key={i} removeThisCard={props.removeThisCard} cardIndex={i}  /> );

	const onSubmitCard = e => {
	    e.preventDefault()
	    const text = textInput.value
	    if (text) {
	      props.onFormSubmit(text)
	    } else {
	      props.onFormSubmit('no text');	
	    }
	  }
    
	return (
        <div className="list">
        	<h2>{props.title}</h2>
        	{cards} 
        	<form id="addCard" onSubmit={onSubmitCard}>
                <input placeholder="new card text" 
                    ref={input => textInput = input }
                />
                <button type="submit">Add Card</button>
            </form>
            <button 
	             onClick={() => props.removeThisList(props.listIndex)}
	             >
	             Remove List
             </button>
        </div>
    ); // return
}

function Card(props){
	return (
		<div className="card">
             <p>{props.text}</p>
             <button 
	             onClick={() => props.removeThisCard(props.cardIndex)}
	             >
	             Remove Card
             </button>
		</div>
	); // return
}


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<BoardContainer />, document.getElementById('target'))
);