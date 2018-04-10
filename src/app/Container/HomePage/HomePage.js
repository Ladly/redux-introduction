import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOneAction, subtractAction, fetchDataWithRedux } from './actions'
import { ListItem } from './../../Components/ListItem'

class HomePage extends Component {

	componentDidMount(){
		this.props.getStuff()
	}

	tryLikeThis = () => {
		if(this.props.home.posts) {
			const { list } = this.props.home.posts
			console.log(list)
			return list.map((post, i) => {
				console.log(post)
				return (<ListItem key={post} title={post}/>)
			})
		}
	}

	render() { 
		// this.tryLikeThis()
		console.log(this.props)
		return (
			<div className="container">
				<p>Currnet State: {this.props.home.number}</p>		
				<div className="button-holder">
					<button className="btn btn-primary" onClick={this.props.addOne}>Increase</button>
					<button className="btn btn-primary" onClick={this.props.subtractOp}>Decrease</button>
					<ul>
						{/* {this.displayTitles()} */}
					</ul>	

				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		home: state.homeReducer
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addOne: () => dispatch(addOneAction()),
		subtractOp: () => dispatch(subtractAction(2)),
		getStuff: () => dispatch(fetchDataWithRedux()),		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
