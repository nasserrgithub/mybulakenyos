import React from 'react';
import {Alert} from 'react-bootstrap';


const Filler = () => {
	return (
		<Alert bsStyle="success">
		  <strong>Please select a location.</strong> This will redirect you to the jobs list from the selected location.
		</Alert>
	);
}

export default Filler;