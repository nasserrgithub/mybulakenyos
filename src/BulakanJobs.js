import React, {Component} from 'react';
import ViewJobsButton from './ViewJobsButton';
import BulakanJobsDisplay from './BulakanJobsDisplay';

class BulakanJobs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			jobsroute: '',
			data: [],
			count: '',
			buttontext: 'View Available Jobs in Bulakan, Bulacan '
		}
	}


	onJobsRouteChange = (jobsroute)  => {
		this.setState({jobsroute: jobsroute});
		this.changeButtonText();
		this.fetchCount();
		this.fetchTable();
	}

	fetchTable = () => {
		fetch('http://localhost:3000/jobsbulakan')
		.then(response => response.json())
		.then(data => this.setState({data: data}))
	}

	fetchCount = () => {
		fetch('http://localhost:3000/jobsbulakancount')
		.then(response => response.json())
		.then(data => this.setState({count: data.count}))
	}

	changeButtonText = () => {
		this.setState({buttontext: 'Jobs in Bulakan, Bulacan '})
	}

	render() {
		const {data} = this.state;
		const jobsArray = data.map((job, index) => {
			return <BulakanJobsDisplay 
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

export default BulakanJobs;