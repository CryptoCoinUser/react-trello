require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

class ListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            cards: ['cards[] placeholder ', 'cards[] placeholder 2 ']
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(textInput){
        this.setState({
            cards: [...this.state.cards, textInput]
        });
    }

    render() {
        return (
            <div className="listcontainer">
                <List 
                 cards={this.state.cards} 
                 onFormSubmit={this.onFormSubmit} 
                />
                
            </div>
        ); // return
    } // render
}

function List(props) {
	let textInput;
	const cards = props.cards.map((card, i) => <Card text={card} key={i} /> );

	const onSubmitCustom = e => {
	    e.preventDefault()
	    const text = textInput.value
	    if (text) {
	      props.onFormSubmit(text)
	    }
	  }
    
	return (
        <div className="list">
        	{cards} 
        	<form id="addCard" onSubmit={onSubmitCustom}>
                <input placeholder="new card text" 
                    ref={input => textInput = input }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    ); // return
}

function Card(props){
	return (
		<div className="card">
             <p>{props.text}</p>
		</div>
	); // return
}


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<ListContainer />, document.getElementById('target'))
);