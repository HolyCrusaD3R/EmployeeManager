import { Component } from "react";

class ViewModal extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="modal fade" id={"viewModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Employee Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Name: <strong>{ this.props.employeeData.employee_name }</strong>
                            <hr/>
                            Salary: <strong>{ this.props.employeeData.salary }</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ViewModal;