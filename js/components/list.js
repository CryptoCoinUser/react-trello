// js/components/list.js
import React from 'react';
import Card from './card';

 
export default class List extends React.Component {
    render() {
        const cards = [];
        const cardsToPrint = 4;
        for (let i=0; i < cardsToPrint; i++) {
            cards.push(<Card cardNum={i} 
                        listNum={this.props.listNum} key={i} 
                        cardsToPrint={cardsToPrint}
                        />);
        }
        return (
            <div className="listOfCards">
                <h4>This is list {this.props.listNum + 1}</h4>
                {cards}
            </div>
        );
    }
}