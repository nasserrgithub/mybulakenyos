import React, {Component} from 'react';
import './Register.css';
import RegisterForm from './RegisterForm';
import RegisterFailedForm from './RegisterFailedForm';
import {Alert} from 'react-bootstrap';

class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			address: '',
			email: '',
			password: '',
			password2: '',
			isValid: true
		}
	}

	onEmailChange = (event) => {
		this.setState({email:event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password:event.target.value})
	}

	onPasswordChange2 = (event) => {
		this.setState({password2:event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name:event.target.value})
	}

	onAddressChange = (event) => {
		this.setState({address:event.target.value})
	}

	onSubmit = () => {
		const {email, password, name, address, isValid, password2} = this.state
		if(name !== '' && address !== '' && address.toLowerCase().includes('bulacan') && email.includes('@') && email.includes('.') && password.length >= 8 && password === password2) {
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: name,
					address: address,
					email: email,
					password: password
				})
			})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.loadName(user.name.toUpperCase()) 
					this.props.onRouteChange('home') 
				}
			})
		} else {
			this.setState({isValid: false})
		}
	}

	render() {
		return(
			<div>
				{
					this.state.isValid === true 
					? 	<RegisterForm 
							onSubmit={this.onSubmit} 
							onEmailChange={this.onEmailChange}
							onPasswordChange={this.onPasswordChange}
							onPasswordChange2={this.onPasswordChange2}
							onNameChange={this.onNameChange}
							onAddressChange={this.onAddressChange}
						/>
					: 	<div>
							<RegisterFailedForm 
								onSubmit={this.onSubmit} 
								onEmailChange={this.onEmailChange}
								onPasswordChange={this.onPasswordChange}
								onPasswordChange2={this.onPasswordChange2}
								onNameChange={this.onNameChange}
								onAddressChange={this.onAddressChange}
							/>
						</div>

				}
				
		  	</div>
		);
	}
}

export default Register;