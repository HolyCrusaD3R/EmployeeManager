import axios from "axios";
import { Component } from "react";
import ViewModal from "./modals/ViewModal";
import UpdateModal from "./modals/UpdateModal";
import DeleteModal from "./modals/DeleteModal";


class TableActions extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id: null,
            employee_name: null,
            salary: null
        };
    }
    
    // Get Individual Employee Data.
    getEmployeeDetails = (id) => {
        axios.post('/post/employee/details', { employeeId: id})
            .then((response) => {
                this.setState({
                    id: response.data.id,
                    employee_name: response.data.employee_name,
                    salary: response.data.salary
                });
            }); 
    }

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target={"#viewModal"+this.props.eachRowId} onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>View</button>
                <ViewModal modalId={ this.props.eachRowId } employeeData={ this.state } />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#updateModal"+this.props.eachRowId} onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>Update</button>
                <UpdateModal modalId={ this.props.eachRowId } employeeData={ this.state } />
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#deleteModal"+this.props.eachRowId} onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>Delete</button>
                <DeleteModal modalId={ this.props.eachRowId } employeeData={ this.state} />
            </div>
        );
    }
}

export default TableActions;