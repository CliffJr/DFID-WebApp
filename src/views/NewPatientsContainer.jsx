import React, {Component} from 'react'
import axios from 'axios'
import NewPatientsList from './NewPatientsList';

class NewPatientsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {dfidDb: []};
    }

    //store data on res.data
    componentDidMount(){
        axios.get('http://localhost:4000/dfidDb/')
        .then(res => {
            this.setState({ dfidDb: res.data })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
                 <NewPatientsList newPatientDetails={this.state.dfidDb} />
        );
    }
}

export default NewPatientsContainer;

