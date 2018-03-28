import React, {Component} from 'react';

const SubmitOffer = () => {
	return (
		<div style={{marginTop: '30px', marginLeft: '30px'}}>
			<h1 style={{textAlign: 'left'}}>How to submit a job offer?</h1>

			<p style={{textAlign: 'left', marginBottom:'20px'}}>
				Email us on <strong style={{color: 'blue'}}>mybulakenyos@gmail.com</strong> <em style={{color: 'red'}}><strong>using your myBulakenyos sign-in email</strong></em> with the following details:
			</p>
			<div className="reqs" style={{textAlign: 'left', marginLeft: '20px'}}>
				<p><strong>JOB POSITION:</strong> (eg. Cashier)</p>
				<p><strong>MONTHLY SALARY:</strong> (eg. 10,000 - 15,000)</p>
				<p><strong>COMPANY/BUSINESS NAME:</strong> (eg. Pure Gold)</p>
				<p><strong>COMPANY/BUSINESS EXACT ADDRESS:</strong> (eg. 36 Bagumbayan St, Bulacan, 3017 Bagumbayan St, Bulacan, 3017 Bulacan)</p>
				<p><strong>YOUR CURRENT EMAIL:</strong> (eg. example_employer@gmail.com)</p>
				<p><strong>YOUR CURRENT CONTACT NUMBER:</strong> (eg. 09066699011)</p>
				<p><strong>JOB POST DURATION:</strong> (eg. one month)</p>
				<p style={{marginLeft: '40px'}}><em>POSTING FEES:</em> The service is free as of now. We will be asking for job posting fee as the website grows. </p>
				<p style={{marginLeft: '40px'}}>(Most of the fees collected will be used for the maintenance and improvement of the website)</p>
			</div>

			<p style={{textAlign: 'left', marginTop:'20px'}}>
				Your submission will be reviewed within <strong>1-3 working days</strong>.
				If the job offered is accepted, you will receive an email from us for the conditions
				before the job offer be posted. Thank you.
			</p>
		</div>
	);
}

export default SubmitOffer;