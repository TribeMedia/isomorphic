/**
 * @jsx React.DOM
 */
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <p>View <a href="/posts">posts</a>.</p>
        <div class="debug">Rendered {this.props.renderer}-side.</div>
      </div>
    );
  }
});