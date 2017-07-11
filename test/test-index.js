import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

//import {Card}  from '../js/index';
import Card from '../js/components/card';

 
describe('Card component', function() {
    it('Renders a card with a string',  function() {
        const text = "test text";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        const card = result.props.children[0];
        console.log(card);
        card.type.should.equal('p');
        card.props.children.should.equal('test text');
        // img.props.src.should.equal(url);
        // img.props.alt.should.equal(description);

        // const p = result.props.children[1];
        // p.type.should.equal('p');
        // p.props.children.should.equal(description);
    });
});
