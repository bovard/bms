/** @jsx React.DOM */
var React = require('react');

var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Row = require('react-bootstrap').Row;
var Well = require('react-bootstrap').Well;

var columns = require('./columns');
var constants = require('./constants');

var CreateNew = React.createClass({
    propTypes: {
        createQuery: React.PropTypes.func.isRequired
    },
    getInitialState: function() {
        return ({
            columns: []
        });
    },
    handleSubmit: function() {
        // TODO: propagate the data
        this.props.createQuery();
        return false;
    },
    addField: function() {
        var columns = this.state.columns;
        columns.push(this.refs.field.getValue());
        this.setState({
            columns: columns
        });
        return false;
    },
    render: function() {
        var column;
        var unused = Object.keys(columns).filter(function(key) {
            return this.state.columns.indexOf(key) === -1;
        }.bind(this));
        var fieldOptions = unused.map(function(key) {
            column = columns[key];
            return (
                <option key={key} value={key}>{key} - {column.description}</option>
            );
        });

        var inputs = this.state.columns.map(function(key) {
            column = columns[key];
            if (column.data.type == constants.DATA_TYPES.NUMERIC_INTS) {
                return (
                    <Input
                        type="text"
                        label={key}
                        labelClassName="col-xs-2"
                        wrapperClassName="col-xs-4"
                        help={column.description}
                        ref={key} />
                );
            } else if (column.data.type == constants.DATA_TYPES.NUMERIC) {
                var options = Object.keys(column.data.defined).map(function(key) {
                    return (
                        <option key={key} value={key}>{key} - {column.data.defined[key]}</option>
                    );
                });

                return (
                    <Input
                        type="select"
                        label={key}
                        labelClassName="col-xs-2"
                        wrapperClassName="col-xs-4"
                        help={column.description}
                        ref={key}>
                    {options}
                    </Input>
                );


            }
        });

        var populationForm;
        if (this.state.columns.length === 0) {
            populationForm = (
                <Row>
                    <Col xsOffset={2}>
                        <h5>Add a property to get started</h5>
                    </Col>
                </Row>
            );
        } else {
            populationForm = (
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    {inputs}
                    <Input type="submit"
                    className="btn-success"
                    wrapperClassName="col-xs-offset-2 col-xs-4"
                    help="Compares the average income of the selected subpopulation against the average income from 1972-2013"
                    value="Compare" />
                </form>
            );
        }

        return (
            <Well>
            <h2>Define a population</h2>
            <br />
            {populationForm}
            <br />
            <Well>
            <form className="form-horizontal" onSubmit={this.addField}>
                <Input
                    type="select"
                    label="Field"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    ref="field">
                    {fieldOptions}
                </Input>
                <Input type="submit"
                    className="btn-success"
                    wrapperClassName="col-xs-offset-2 col-xs-2"
                    help="Add the selected criteria"
                    value="Add" />
            </form>
            </Well>
            </Well>
        )
    }
});

module.exports = CreateNew;

