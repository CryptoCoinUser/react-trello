require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

//import Person from './components/person';
//import List from './components/list';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
	//ReactDOM.render(<List />, document.getElementById('target'))
    /* */
    ReactDOM.render(<Board 
    	board_title="Board title from index.js"
    	board_lists={["list title 1 from index.js", "list title 2 from index.js", "list 3"]} 
    	/>,
     document.getElementById('target'))
    
);