/**
* Inlämningsuppgift 5
* Magnus Sundström
* 2016-11-28
**/

"use strict";

var movies = [];

class MovieComponent extends React.Component {
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
	}

	handleChangeEvent(event) {
		var stateObject = function() {
				var returnObj = {};
				returnObj[this.target.name] = this.target.value;
				return returnObj;
			}.bind(event)();
		this.setState(stateObject);
	}

	handleSubmit(event) {
		if (this.state.title.trim().length < 1) {
			alert('Movie must have a title!');
			event.preventDefault();
			return;
		}
		this.state.index++;
		this.setState(this.state);
		movies.push(this.state);
		this._child.componentWillMount();
		event.preventDefault();
	}

	render() {
		return (
			<div id="main-content">
				<div id="form-content">
					<form onSubmit={this.handleSubmit}>
						<ul className="form-style">
							<li>
								<label>Film and year<span className="required">*</span></label>
								<input type="text" name="title" className="field-divided" placeholder="Title"
									value={this.state.title}
									onChange={this.handleChangeEvent} />&nbsp;
								<input type="number" name="year" className="field-divided" min="1880"
									max={new Date().getFullYear() + 25} value={this.state.year}
									onChange={this.handleChangeEvent} />
							</li>
							<li>
								<label>Actor</label>
								<input type="text" name="actor" className="field-long" value={this.state.actor}
									onChange={this.handleChangeEvent} />

							</li>
							<li>
								<label>Gengre<span className="required">*</span></label>
								<select name="genre" className="field-select" value={this.state.genre}
									onChange={this.handleChangeEvent}>
									<option value="Action">Action</option>
									<option value="Drama">Drama</option>
									<option value="Horror">Horror</option>
								</select>
							</li>
							<li>
								<label>Plot</label>
								<textarea name="plot" className="field-long field-textarea" value={this.state.plot}
									onChange={this.handleChangeEvent}></textarea>
							</li>
							<li>
								<input type="submit" value="Add movie"/>
							</li>
						</ul>
					</form>
				</div>
				<div id="table-content">
					<FilteredMovies ref={(child) => { this._child = child; }} />
				</div>
			</div>
		);}}


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
				<div className="form-style">
					<label className="field-divided">Movie list</label>
					<input type="text" placeholder="Search" className="field-divided"
						onChange={this.filterList}/>
					<Table items={this.state.items} />
				</div>
			);}});



class Table extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeEvent = this.handleChangeEvent.bind(this);
		self = this;
	}

	handleChangeEvent(event) {
		var stateObject = function() {
				for (var i = 0; i < movies.length; i++) {
					if (movies[i].index == this.target.name) {
						movies.splice(i, 1);
						break;
					}
				}
			}.bind(event)();
		this.forceUpdate();
	}

	render() {
		return (
			<table className="movie-table">
				<tbody>
					<tr>
						<th>Index</th>
						<th>Title</th>
						<th>Year</th>
						<th>Actor</th>
						<th>Genre</th>
						<th id="delete"></th>
					</tr>{
						this.props.items.map(
							function(item) {
								return (
									<tr key={item['index']}>
										<td>{item['index']}</td>
										<td>{item['title']}</td>
										<td>{item['year']}</td>
										<td>{item['actor']}</td>
										<td>{item['genre']}</td>
										<td><button className="remove" name={item['index']}
											onClick={self.handleChangeEvent}>Delete</button></td>
									</tr>
								)})}
				</tbody>
			</table>
		)}};

ReactDOM.render(<MovieComponent/>, document.getElementById('container'));