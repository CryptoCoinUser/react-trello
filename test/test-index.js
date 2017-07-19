import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';
import ListContainer from '../js/components/listcontainer';


describe('Card component', function() {
    it('Renders a card with a string',  function() {
        
        const sampleText = "test text";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={sampleText} />);
        const card = renderer.getRenderOutput();
        card.props.className.should.equal('card');

        const card0thChild = card.props.children[0];
        card0thChild.type.should.equal('p');
        card0thChild.props.children.should.equal(sampleText);
    });
});


describe('List component', function() {
    it('Renders a list with some cards',  function() {

        const testTitle = "test list title";
        const renderer = TestUtils.createRenderer();
        renderer.render(<List title={testTitle} cards={[]} />);
        const list = renderer.getRenderOutput();
        list.props.className.should.equal('list');

        const list0thChild = list.props.children[0];
        list0thChild.type.should.equal('h2');
        list0thChild.props.children.should.equal(testTitle);

        const list2ndChild = list.props.children[2];
        list2ndChild.type.should.equal('form');
        list2ndChild.props.id.should.equal('addCard');
    });
});


describe('ListContainer component', function() {
    it('Renders a list container',  function() {
        
        const sampleText = "test text";
        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={sampleText} />);
        const listcontainer = renderer.getRenderOutput();
        listcontainer.props.className.should.equal('listcontainer');
    });
});
