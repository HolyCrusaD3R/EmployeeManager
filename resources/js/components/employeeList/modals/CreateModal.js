import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee_name: null,
            salary: null
        }
    }

    // Updating Employee Name State
    inputEmployeeName = (event) => {
        this.setState({
            employee_name: event.target.value,
        });
    }
    
    // Updating Employee Salary Salary
    inputEmployeeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    }

    // Reset state
    resetState = () => {
        this.setState({
            employee_name: null,
            salary: null
        });
    }

    createEmployeeData = () => {
        axios.post('/create/employee/data', {
            employee_name: this.state.employee_name,
            salary: this.state.salary
        }).then(() => {
            toast.success("New Employee Data Created!");
            setTimeout(() => {
                location.reload();
            }, 2500);
        });       
    }

    
    render() {
        return (
            <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">New Employee Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    
                                    <div className="mb-3">
                                        <label htmlFor="employeeName" className="form-label">Employee Name</label>
                                        <input type="text" id="employeeName" value={ this.state.employee_name ?? ""} onChange={this.inputEmployeeName} className="form-control"/>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="salary" className="form-label">Employee Salary ( $ )</label>
                                        <input type="text" id="salary" value={ this.state.salary ?? ""} onChange={this.inputEmployeeSalary} className="form-control"/>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ this.resetState }>Close</button>
                            <input type="submit" className="btn btn-primary" value="Add New Employee" onClick={ this.createEmployeeData }  /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModal;