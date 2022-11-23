import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";

class DeleteModal extends Component {

    constructor(props) {
        super(props);
    }

    // Delete Employee Data by id from prop
    deleteEmployeeData = (employeeId) => {
        axios.delete('/delete/employee/data/'+employeeId)
            .then(() => {
                toast.error("Employee's Data Deleted!");
                setTimeout(() => {
                    location.reload();
                }, 2500);
            });
    }
    

    render() {
        return (
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">Employee's Data Deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <strong>Are you sure you want to delete this employee's data?</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={ () => {this.deleteEmployeeData(this.props.employeeData.id)}}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;