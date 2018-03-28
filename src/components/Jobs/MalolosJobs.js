import React, {Component} from 'react';
import ViewJobsButton from './ViewJobsButton';
import JobsDisplay from './JobsDisplay';

class MalolosJobs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			count: '',
			buttontext: 'View Available Jobs in Malolos, Bulacan '
		}
	}


	onJobsRouteChange = ()  => {
		this.changeButtonText();
		this.fetchCount();
		this.fetchTable();
	}

	fetchTable = () => {
		fetch('https://afternoon-garden-57638.herokuapp.com/jobsmalolos')
		.then(response => response.json())
		.then(data => this.setState({data: data}))
	}

	fetchCount = () => {
		fetch('https://afternoon-garden-57638.herokuapp.com/jobsmaloloscount')
		.then(response => response.json())
		.then(data => this.setState({count: data.count}))
	}

	changeButtonText = () => {
		this.setState({buttontext: 'Jobs in Malolos, Bulacan '})
	}

	render() {
		const {data} = this.state;
		const jobsArray = data.map((job, index) => {
			return <JobsDisplay 
						key={index} 
						id={data[index].id} 
						job_position={data[index].job_position}
						monthly_salary={data[index].monthly_salary}
						company={data[index].company}
						company_address={data[index].company_address}
						email={data[index].email}
						contact_num={data[index].contact_num}
						job_post_duration={data[index].job_post_duration}
						joined={data[index].joined}
					/>
		})
		return(
			<div>
				<ViewJobsButton onJobsRouteChange={this.onJobsRouteChange} count={this.state.count.toString()} buttontext={this.state.buttontext}/>
				{jobsArray}
			</div>
		);
	}
}

export default MalolosJobs;