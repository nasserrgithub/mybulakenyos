import React from 'react';

const Navbar = ({onRouteChange, name}) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <a className="navbar-brand" href="#" >myBulakenyos</a>
		  <a className="navbar-brand" href="#">{name}</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <button type="button" className="btn btn-warning" onClick={() => onRouteChange('submitoffer')}>
				  SUBMIT A JOB OFFER
				</button>
		      </li>

		      <li className="nav-item dropdown">
		        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{cursor: 'pointer'}}>
		          Locations
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
		          <a
		          	onClick={() => onRouteChange('bulakanjobs')} 
		          	className="dropdown-item" style={{cursor: 'pointer'}}>Bulakan
		          </a>
		          <a
		          	onClick={() => onRouteChange('otherlocation')} 
		          	className="dropdown-item" style={{cursor: 'pointer'}}>Other
		          </a>
		        </div>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" onClick={() => onRouteChange('signin')} style={{cursor: 'pointer'}}
		        >Sign Out</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Navbar;