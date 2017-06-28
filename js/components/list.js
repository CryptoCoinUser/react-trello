// js/components/list.js
import React from 'react';
import Card from './card';

 
export default class List extends React.Component {
    render() {
        const cards = [];
        for (let i=0; i<3; i++) {
            cards.push(<Card />);
        }
        return (
            <div className="listOfCards">
                <h4>This is a list</h4>
                {cards}
            </div>
        );
    }
}