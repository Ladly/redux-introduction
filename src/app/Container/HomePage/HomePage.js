import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOneAction } from './actions'
import { subtractAction } from './actions'

class HomePage extends Component {

	render() {
		console.log(this.props)
		return (
			<div className="container">
				<p>Currnet State: {this.props.home.number}</p>			
				<div className="button-holder">
					<button className="btn btn-primary" onClick={this.props.addOne}>Increase</button>
					<button className="btn btn-primary" onClick={this.props.subtractOp}>Decrease</button>	
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
		subtractOp: () => dispatch(subtractAction(2))
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
