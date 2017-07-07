import React from 'react';
import Card from './card';
//import cardMircoManaged from './card';
//import {cardMicroManaged as cardMicroManaged} from './card';


export default function List(props) {
    const cards=props.cards_text.map(function(card, i, arr){
        return <Card proptext={card} key={i} num={i} len={arr.length} />
    })
    return (
        <div className="listOfCards">
            <h1>{props.list_title}</h1>
            {cards}
        </div>
    ); // return
} // export



/* 
export default class List extends React.Component {
    render() {
        const cards = [];
        const cardsToPrint = 4;
        for (let i=0; i < cardsToPrint; i++) {
            cards.push(<Card cardNum={i} 
                        listNum={this.props.listNum} key={i} 
                        cardsToPrint={cardsToPrint}
                        />);
        } // for
        return (
            <div className="listOfCards">
                <h4>This is list {this.props.listNum + 1}</h4>
                {cards}
            </div>
        ); // return
        
    } // render
}
*/
