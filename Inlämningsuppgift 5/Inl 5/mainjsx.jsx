/**
* Inlämningsuppgift 5
* Magnus Sundström
* 2016-11-28
**/

"use strict";
/*
 var ExampleApplication = React.createClass({
        render: function() {
          var elapsed = Math.round(this.props.elapsed  / 100);
          var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var message = 'React has been successfully running for ' + seconds + ' seconds.';
          return React.DOM.p(null, message);
        }
      });/*

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
/*var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();
setInterval(function() {
	ReactDOM.render(
		ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
		//React.createElement('h1', null, 'Hello!'),
		document.getElementById('containerx')
	);
}, 50);/*
/*
var MyComponent = React.createClass({
    render: function() {
        return (
            <h1>Hello, world!</h1>
        );
    }
});*/

//https://facebook.github.io/react/docs/forms.html
class MyComponentx extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			index: 0,
			title: '',
			actor: '',
			genre: 'Action',
			year: new Date().getFullYear(),
			plot: ''};

		this.handleChangeEvent = this.handleChangeEvent.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChangeEvent(event) {
		var stateObject = function() {
				var returnObj = {};
				returnObj[this.target.name] = this.target.value;
				return returnObj;
    		}.bind(event)();
		this.setState(stateObject);
	}

	handleClick(event) {
		//this.state.index++;
		//this._child.componentWillMount();
	}

	handleSubmit(event) {
		this.state.index++;
		this.setState(this.state);
		movies.push(this.state);
		this._child.componentWillMount();
		event.preventDefault();
	}

    render() {
        return (
        	<div>
	        	<form onSubmit={this.handleSubmit}>
					<ul className="form-style-1">
						<li>
							<label>Film and year<span className="required">*</span></label>
							<input type="text" name="title" className="field-divided" placeholder="Title" value={this.state.title} onChange={this.handleChangeEvent} />&nbsp;
							<input type="number" name="year" className="field-divided" min="1880" max={new Date().getFullYear() + 25} value={this.state.year} onChange={this.handleChangeEvent} />
						</li>
						<li>
							<label>Actor<span className="required">*</span></label>
							<input type="text" name="actor" className="field-long" value={this.state.actor} onChange={this.handleChangeEvent} />

						</li>
						<li>
							<label>Gengre<span className="required">*</span></label>
							<select name="genre" className="field-select" value={this.state.genre} onChange={this.handleChangeEvent}>
								<option value="Action">Action</option>
								<option value="Drama">Drama</option>
								<option value="Horror">Horror</option>
							</select>
						</li>
						<li>
							<label>Plot</label>
							<textarea name="plot" className="field-long field-textarea" value={this.state.plot} onChange={this.handleChangeEvent}></textarea>
						</li>
						<li>
							<input type="submit" value="Submit"/>
						</li>
					</ul>
				</form>
				<FilteredMovies ref={(child) => { this._child = child; }} />
        	</div>
        );
    }
}

var movies = [];

var FilteredMovies = React.createClass({
	filterList: function(event) {
		this.getInitialState();
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item) {
			return item['title'].toLowerCase().search(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({items: updatedList});
	},
	getInitialState: function() {
		return {
			initialItems: movies, //array,
			items: []
		}
	},
	componentWillMount: function() {
		this.setState({items: this.state.initialItems})
	},
	render: function() {
			return (
				<div className="filter-list">
					<input type="text" placeholder="Search" onChange={this.filterList}/>
					<List items={this.state.items}/>
				</div>
			);
		}
	});

var objects = [
		{index: 1, name: "Apples"},
		{index: 2, name: "Broccoli"},
		{index: 3, name: "Chicken"},
		{index: 4, name: "Duck"},
		{index: 5, name: "Lin"},
		{index: 6, name: "Eggs"},
		{index: 7, name: "Fish"},
		{index: 8, name: "Granola"},
		{index: 9, name: "Hash Browns"}
	]

var FilteredList = React.createClass({
	filterList: function(event) {
		var updatedList = this.state.initialItems;
		updatedList = updatedList.filter(function(item) {
			return item['name'].toLowerCase().search(
				event.target.value.toLowerCase()) !== -1;
			});
			this.setState({items: updatedList});
			//array.push(event.target.value);
		},
	getInitialState: function() {
			return {
				initialItems: objects, //array,
				items: []
			}
		},
	componentWillMount: function() {
			this.setState({items: this.state.initialItems})
		},
	render: function() {
			return (
				<div className="filter-list">
					<input type="itext" placeholder="Search" onChange={this.filterList}/>
					<List items={this.state.items}/>
				</div>
			);
		}
	});
/*
var Wrapper = React.createClass({

	});*/

var List = React.createClass({
		render: function() {
			return (
				<ul>
					{this.props.items.map(function(item) {return <li key={item['index']}>{item['title']}</li>})}
				</ul>
			)
		}
	});

//ReactDOM.render(<MyComponent/>, document.getElementById('test'));
ReactDOM.render(<MyComponentx/>, document.getElementById('container'));
//ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));
//ReactDOM.render(<FilteredMovies/>, document.getElementById('movies-div'));