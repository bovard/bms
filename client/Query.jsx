/** @jsx React.DOM */
var React = require('react');

var CreateQuery = require('./CreateQuery');
var DisplayQuery = require('./DisplayQuery');

var STATES = {
    CREATING: 'creating',
    DISPLAYING: 'displaying'
};

var Query = React.createClass({
    getInitialState: function() {
        return {
            state: STATES.CREATING
        }
    },
    createQuery: function() {
        this.setState({state: STATES.DISPLAYING});
    },
    render: function() {
        if (this.state.state === STATES.CREATING) {
            return <CreateQuery createQuery={this.createQuery} />;
        } else {
            return <DisplayQuery />;
        }
    }
});

module.exports = Query;
