/** @jsx React.DOM */
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Well = require('react-bootstrap').Well;

var About = require('./About');
var MainNav = require('./MainNav');
var Query = require('./Query');


var InterfaceComponent = React.createClass({
    componentWillMount : function() {
        this.callback = (function() {
            this.forceUpdate();
        }).bind(this);

        this.props.router.on("route", this.callback);
    },
    componentWillUnmount : function() {
        this.props.router.off("route", this.callback);
    },
    render: function() {
        var nav = 0;
        var content;

        if (this.props.router.current[0] == 'home') {
            nav = 1;
            content = (
                <Query />
            );
        }
        else if (this.props.router.current[0] == 'about') {
            nav = 2;
            content = (
                <Well>
                    <About />
                </Well>
            );
        }

        return (
            <div className="content">
                <MainNav current={nav} />
                <Well>
                    {content}
                </Well>
            </div>
        );
    }
});

var Router = Backbone.Router.extend({
    current: ['home'],
    routes: {
        '*actions': function(actions) {
            if (actions) {
                this.current = actions.split('/');
            } else {
                this.current = ["home"];
            }
        }
    },
});

var router = new Router();

React.renderComponent(
    <InterfaceComponent router={router} />,
    document.body
);

Backbone.history.start();