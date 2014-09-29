/** @jsx React.DOM */
var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;

var DisplayQuery = React.createClass({
    render: function() {
        return (
            <Grid>
                <Row>
                    <h3>Placeholder Graph!</h3>
                </Row>
                <Row>
                    <img style={{width: '100%'}} src="static/images/graph.png" />
                </Row>
                <Row>
                    <h5>(The real one will be shiney in d3 and whatnot)</h5>
                </Row>
                <Row>
                    <h6>Query ran in 1.3 sec across 10.7 million data points (or something badass)</h6>
                </Row>
            </Grid>
        );
    }
});

module.exports = DisplayQuery;
