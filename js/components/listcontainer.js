import React from 'react';
import List from './list';
//import Card from './card';

export default class ListContainer extends React.Component {
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