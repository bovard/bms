/** @jsx React.DOM */
var React = require('react');

var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;


var CreateNew = React.createClass({
    propTypes: {
        createQuery: React.PropTypes.func.isRequired
    },
    handleSubmit: function() {
        this.props.createQuery(
            parseInt(this.refs.width.getValue()),
            parseInt(this.refs.height.getValue()),
            this.refs.symmetry.getValue(),
            this.refs.name.getValue(),
            this.refs.mirrored.getValue()
        );
        return false;
    },
    render: function() {
        return (
            <Well>
            <h2>Create a Query!</h2>
            <br />
            <form title="Create A Query!" className="form-horizontal" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    label="Map Name"
                    defaultValue="test"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    ref="name" />
                <Input
                    type="text"
                    label="Map Width"
                    defaultValue="20"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    help="Must be between 20 and 70 inclusive to be official"
                    ref="width" />
                <Input
                    type="text"
                    label="Map Height"
                    defaultValue="20"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    help="Must be between 20 and 70 inclusive to be official"
                    ref="height" />
                <Input
                    type="select"
                    label="Symmetry"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    ref="symmetry">
                    {options}
                </Input>
                <Input
                    type="select"
                    label="Mirror Mode"
                    labelClassName="col-xs-2"
                    wrapperClassName="col-xs-4"
                    ref="mirrored">
                    {trueFalse}
                </Input>
                <Input type="submit"
                    className="btn-success"
                    wrapperClassName="col-xs-offset-2 col-xs-2"
                    value="Create New Map" />
            </form>
            </Well>
        )
    }
});

module.exports = CreateNew;

