import React from 'react';


const SignInForm = ({onEmailChange, onPasswordChange, onSubmit, onRouteChange}) => {
	return (
		<div>
			<div className="signinform">
				<h1>Welcome to myBulakenyos!</h1><h1>Please sign in here.</h1>
			    <input 
			    	onChange={onEmailChange}
			    	type="email" 
			    	className="form-control" 
			    	id="exampleInputEmail1" 
			    	aria-describedby="emailHelp" 
			    	placeholder="Enter email"/>
			    <input 
			    	onChange={onPasswordChange}
			    	type="password" 
			    	className="form-control" 
			    	id="exampleInputPassword1" 
			    	placeholder="Password"/>
	
			    <input 
			    	onClick={onSubmit}
			    	type="submit" 
			    	className="btn btn-dark" 
			    	value="Sign in"
			    />
			</div>
		  	<small>Not yet a member? <span onClick={ () => onRouteChange('register')}className="alert-link" style={{cursor: 'pointer'}}>Register here.</span></small>
	  	</div>
	);
}

export default SignInForm;

