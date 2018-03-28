import React from 'react';
import './RegisterFailedForm.css';


const RegisterFailedFrom = ({onSubmit, onEmailChange, onPasswordChange, onPasswordChange2,onNameChange, onAddressChange}) => {
	return (
		<div className="registerfailedform">
			<h5><strong>Invalid entries! Please check.</strong></h5>
			<h5><strong>All fields can't be empty.</strong></h5>
			<input onChange={onNameChange} type="text" className="form-control" placeholder="Full Name" required/>
			<input onChange={onAddressChange} type="text" className="form-control"  placeholder="Address (shall include 'Bulacan')" required/>
		    <input onChange={onEmailChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email entered may be already used" required/>
		    <input onChange={onPasswordChange} type="password" className="form-control"  placeholder="Password (at least 8 characters)" required/>
		    <input onChange={onPasswordChange2} type="password" className="form-control"  placeholder="Re-type your password" required/>
		    <button onClick={onSubmit} type="submit" className="btn btn-dark">Register</button>
		</div>
);
}

export default RegisterFailedFrom;