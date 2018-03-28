import React from 'react';
import './JobsDisplay.css';

const JobsDisplay = ({id, job_position, monthly_salary, company, company_address, email, contact_num, job_post_duration, joined}) => {

	return(
		<div className="list">
			<p>
				JOB ID: <strong>{id}</strong> <br/>
				JOB POSITION: <strong>{job_position}</strong> <br/>
				MONTHLY SALARY: <strong>{monthly_salary}</strong> <br/>
				COMPANY: <strong>{company}</strong> <br/>
				ADDRESS: <strong>{company_address}</strong> <br/>
				EMAIL: <strong>{email}</strong> <br/>
				CONTACT NO.: <strong>{contact_num}</strong> <br/>
				JOB POST DURATION: <strong>{job_post_duration}</strong> <br/>
				POSTED ON: <strong>{joined}</strong>
			</p>
		</div>
	);
}

export default JobsDisplay;