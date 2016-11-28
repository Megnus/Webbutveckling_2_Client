/**
* Inlämningsuppgift 5
* Magnus Sundström
* 2016-11-28
**/

"use strict";

 var ExampleApplication = React.createClass({
        render: function() {
          var elapsed = Math.round(this.props.elapsed  / 100);
          var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var message = 'React has been successfully running for ' + seconds + ' seconds.';
          return React.DOM.p(null, message);
        }
      });

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();
setInterval(function() {
	ReactDOM.render(
		ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
		//React.createElement('h1', null, 'Hello!'),
		document.getElementById('container')
	);
}, 50);

var MyComponent = React.createClass({
    render: function() {
        return (
            <h1>Hello, world!</h1>
        );
    }
});

ReactDOM.render(<MyComponent/>, document.getElementById('test'));