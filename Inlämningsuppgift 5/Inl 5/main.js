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
		document.getElementById('containerx')
	);
}, 50);

var MyComponent = React.createClass({
    render: function() {
        return (
            <h1>Hello, world!</h1>
        );
    }
});


var MyComponentx = React.createClass({
    render: function() {
        return (
			<ul className="form-style-1">
				<li>
					<label>Full Name <span className="required">*</span></label>
					<input type="text" name="field1" className="field-divided" placeholder="First" />&nbsp;
					<input type="text" name="field2" className="field-divided" placeholder="Last" />
				</li>
				<li>
					<label>Email <span className="required">*</span></label>
					<input type="email" name="field3" className="field-long" />
				</li>
				<li>
					<label>Subject</label>
					<select name="field4" className="field-select">
						<option value="Advertise">Advertise</option>
						<option value="Partnership">Partnership</option>
						<option value="General Question">General</option>
					</select>
				</li>
				<li>
					<label>Your Message <span className="required">*</span></label>
					<textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
				</li>
				<li>
					<input type="submit" value="Submit" />
				</li>
			</ul>
        );
    }
});

ReactDOM.render(<MyComponentx/>, document.getElementById('container'));
ReactDOM.render(<MyComponent/>, document.getElementById('test'));


var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
       initialItems: [
         "Apples",
         "Broccoli",
         "Chicken",
         "Duck",
         "Eggs",
         "Fish",
         "Granola",
         "Hash Browns"
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));