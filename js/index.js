require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';

export class Listcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            text: "text placeholder",
            cards: ['cards[] placeholder ', 'cards[] placeholder 2 ']
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
    }

    onAddInputChanged(){
        this.setState({
            changed: true
        });
    }

    onFormSubmit(e, textInput){
        e.preventDefault();
        console.log(textInput);
        this.setState({
            cards: [...this.state.cards, textInput]
        });
    }

    render() {

        return (
            <div className="listcontainer">
                <List 
                 cards={this.state.cards} 
                 onAddInputChanged={this.onAddInputChanged} 
                 onFormSubmit={this.onFormSubmit} 
                />
                <form id="addCard" onSubmit={(e) => this.onFormSubmit(e, this.textInput.value)}>
                    <input 
                        onChange={this.onAddInputChanged} 
                        placeholder="new card text" 
                        ref={(input) => this.textInput = input }
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        ); // return
    } // render
}

export function List(props) {
	const cards=props.cards.map(function(card, i){
        return <Card text={card} key={i} />
    })
	return (
        <div className="list">
        	{cards} 
        </div>
    ); // return
}

export function Card(props){
	return (
		<div className="card">
             <p>{props.text}</p>
		</div>
	); // return
}


document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Listcontainer />, document.getElementById('target'))
);