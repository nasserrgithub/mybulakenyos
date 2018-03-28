import React from 'react';

const ViewJobsButton = ({onJobsRouteChange, count, buttontext}) => {
	return(
		<button onClick={() => onJobsRouteChange()}type="button" className="btn btn-primary" style={{marginTop: '30px'}}>
		  {buttontext}<span className="badge badge-light">{count}</span>
		</button>
	);
}

export default ViewJobsButton;