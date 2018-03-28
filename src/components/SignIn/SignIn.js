import React, {Component} from 'react';
import './SignIn.css';
import SignInForm from './SignInForm';
import {Alert} from 'react-bootstrap';

class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			signinEmail: '',
			signinPassword: '',
			isValidEmail: true
		}
	}

	onEmailChange = (event) => {
		this.setState({signinEmail:event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signinPassword:event.target.value})
	}

	onCheck = () => {
		fetch('https://afternoon-garden-57638.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signinEmail,
				password: this.state.signinPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.loadName(user.name.toUpperCase())
				this.props.onRouteChange('home')
			} else {this.setState({isValidEmail:false})}
		})
	}

	onSubmit = () => {
		this.state.signinEmail.includes('@') && this.state.signinEmail.includes('.') && this.state.signinPassword.length >= 8
			? this.onCheck()
			: this.setState({isValidEmail:false})
	}

	render() {
		const {onRouteChange} = this.props;
		return(
			<div>
				{this.state.isValidEmail === true
					? 	<SignInForm onRouteChange={this.props.onRouteChange} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} onSubmit={this.onSubmit}/>
					: 	<div>
							<Alert bsStyle="warning">
							  <strong>Invalid email or password!</strong> Please provide the correct form of email. Password shall be at least 8 characters.
							</Alert>
							<SignInForm onRouteChange={this.props.onRouteChange} onEmailChange={this.onEmailChange} onPasswordChange={this.onPasswordChange} onSubmit={this.onSubmit}/>
						</div>
				}

		  	</div>

		);
	}
}

export default SignIn;