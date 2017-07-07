import React from 'react';
import List from './list';

export default function Board(props) {
    const cardsText = ["card one from cardsText array in board", "card TWO from cardsText array in board"];
    const cardsText2 = ["card one2 in 2nd list", "card two2 in 2nd list"];
    const cardsText3 = ["card 1 in 3rd list", "card 2 in 3rd list", "card 3 in 3rd list"];

    const arrayOfAllCards = [cardsText, cardsText2, cardsText3];
    const lists = arrayOfAllCards.map(function(cards, i){
        return <List cards_text={cards} list_title={props.board_lists[i]} key={i} />
    });

    return (
        <div className="listOfLists">
            <h2 className="board_title">{props.board_title}</h2>
            {lists}
        </div>
    );
}



/* 
export default class Board extends React.Component {
    render() {
        const lists = [];
        for (let i=0; i<3; i++) {
            lists.push(<List listNum={i} key={i} />);
        }
        return (
            <div className="listOfLists">
                <h2>This is a Board</h2>
                {lists}
            </div>
        );
    }
}
*/