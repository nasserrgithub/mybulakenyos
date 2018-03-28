import React from 'react';
import './BulakanJobsDisplay.css';

const BulakanJobsDisplay = ({id, job_position, monthly_salary, company, company_address, email, contact_num, job_post_duration, joined}) => {

	return(
		<div className="list">
			<p><strong>JOB ID:</strong> {id} <br/><strong>JOB POSITION:</strong> {job_position} <br/><strong>MONTHLY SALARY:</strong> {monthly_salary} <br/><strong>COMPANY:</strong> {company} <br/><strong>ADDRESS:</strong> {company_address} <br/><strong>EMAIL:</strong> {email} <br/><strong>CONTACT NO.:</strong> {contact_num} <br/><strong>JOB POST DURATION:</strong> {job_post_duration} <br/><strong>POSTED ON:</strong> {joined}</p>
		</div>
	);
}

export default BulakanJobsDisplay;