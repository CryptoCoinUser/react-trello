// js/components/board.js
import React from 'react';
import List from './list';

 
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