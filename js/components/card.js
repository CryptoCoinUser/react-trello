import React from 'react';


export default function Card(props){
    //console.log(props);
	return (
		<div className="cardMicroManaged">
             <h3>Card {props.cardNum + 1} of {props.cardsToPrint}:</h3>
             <p>{props.proptext}</p>
		</div>
	); // return
}


/*
export default function Card(props) {
    const cardText = `This is card ${(props.listNum * props.cardsToPrint)+ props.cardNum + 1}`;
    console.log(props);
    return (
        <div className="card">
            <p className="card-text">{cardText}</p>
        </div>
    );
}
*/

