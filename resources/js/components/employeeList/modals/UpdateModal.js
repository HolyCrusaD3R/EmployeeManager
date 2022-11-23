import axios from "axios";
import { Toast } from "bootstrap";
import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee_name: null,
            salary: null
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employee_name: null,
            salary: null
        }

        // Update state from input
        
        if(current_state.employee_name && (current_state.employee_name !== props.employeeData.employee_name))
        {
            return null;
        }
        
        if(current_state.salary && (current_state.salary !== props.employeeData.salary))
        {
            return null;
        }


        // Update state from props
        
        if(current_state.employee_name !== props.employeeData.employee_name) {
            employeeUpdate.employee_name = props.employeeData.employee_name;
        }

        if(current_state.salary !== props.employeeData.salary) {
            employeeUpdate.salary = props.employeeData.salary;
        }

        return employeeUpdate;
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
            employee_name: this.props.employeeData.employee_name,
            salary: this.props.employeeData.salary
        });
    }

    // Update Employee Data
    updateEmployeeData = () => {
        axios.post('/post/employee/update', {employeeId: this.props.employeeData.id, employee_name: this.state.employee_name, salary: this.state.salary })
            .then(() => {
                toast.success("Employee Data Updated!");
                setTimeout(() => {
                    location.reload();
                }, 2500)
            })
    }


    render() {
        return (
            <div className="modal fade" id={"updateModal"+this.props.modalId} tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateModalLabel">Employee Details</h1>
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
                            <input type="submit" className="btn btn-primary" value="Update" onClick={ this.updateEmployeeData }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UpdateModal;