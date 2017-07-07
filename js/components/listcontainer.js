// js/components/list-container.js
import React from 'react';
import List from './list';
import Card from './card';

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
let outsideCards = [];

export default class Listcontainer extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     changed: false,
        //     textEntered: "textEntered constructor placehoder",
        //     cards: ['Listcontainer constructor card 1', 'Listcontainer constructor card 2']
        // };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
    }


    onAddInputChanged(){
        console.log('onAddInputChanged');
        this.setState({
            //changed: true,
            //textEntered: 'hardCoded line 39'
        });
        //console.log(this.state.textEntered);
    }




    onFormSubmit(e, textInput){
        e.preventDefault();
        console.log('textInput ' + textInput);
        console.log('this');
        console.log(this);
        // this.setState({
        //     textEntered: textInput
        // });
        console.log('this.props');
        console.log(this.props);
        //outsideCards.push(<Card proptext={this.props.textEntered} />);
        
        //this.setState({
            //cards.push(<Card proptext={this.state[this.state.textEntered]} />)
            cards: outsideCards
        //});
    }


    render() {
        /*
        const cards = [];
        const cardsToPrint = 4;
        for (let i=0; i < cardsToPrint; i++) {
            cards.push(<Card cardNum={i} 
                        listNum={this.props.listNum} key={i} 
                        cardsToPrint={cardsToPrint}
                        />);
        } // for
        */

        /**/
        return (
            <div className="listOfCards">
                <List 
                 cards={this.props.cards} 
                 listNum={this.props.listNum} 
                 onInputChange={this.onAddInputChanged} 
                 onFormSubmit={this.onFormSubmit} 
                />
                {/*
                <hr />
                <h4>This is list {this.props.listNum + 1}</h4>
                {this.props.cards}
                
                <form id="addCard" onSubmit={(e) => this.props.onFormSubmit(e, this.textInput.value)}>
                    <input 
                        onChange={this.props.onInputChange} 
                        type="text" 
                        placeholder="new card text" 
                        ref={(input) => this.textInput = input }
                    />
                    <button type="submit">Submit</button>
                </form>
                */}
            </div>
        ); // return
        
        
    } // render
}

