import React from 'react';
import Card from './card';
//import cardMircoManaged from './card';
//import {cardMicroManaged as cardMicroManaged} from './card';

/*
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
*/


/* */
export default function List(props) {
 
        /*
        const cards = [];
        const cardsToPrint = 4;
        for (let i=0; i < cardsToPrint; i++) {
            cards.push(<Card cardNum={i} 
                        listNum={props.listNum} key={i} 
                        cardsToPrint={cardsToPrint}
                        />);
        } // for
        */

        return (
            <div className="listOfCards">
                <h4>This is list {props.listNum + 1}</h4>
                {props.cards}

                <form id="addCard" onSubmit={(e) => props.onFormSubmit(e, this.textInput.value)}>
                    {console.log('this')}
                    console.log(this)}
                    <input 
                        onChange={props.onInputChange} 
                        type="text" 
                        placeholder="new card text" 
                        ref={(input) => this.textInput = input }
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        ); // return
}

