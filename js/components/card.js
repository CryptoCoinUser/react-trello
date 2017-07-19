import React from 'react';

export default function Card(props){
    return (
        <div className="card">
             <p>{props.text}</p>
             <button 
                 onClick={() => props.removeThisCard(props.cardIndex)}
                 >
                 Remove Card
             </button>
        </div>
    ); // return
}


