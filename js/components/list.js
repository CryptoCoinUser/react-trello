import React from 'react';
import Card from './card';

export default function List(props) {
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

