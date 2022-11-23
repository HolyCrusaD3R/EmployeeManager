import { Component } from 'react';
import TableRow from './TableRow';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from './modals/CreateModal';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }


    //Life cycle method.
    componentDidMount() {
        this.getEmployeeList();
    }


    //Get Employee List
    getEmployeeList = () => {
        axios.get('/get/employee/list')
            .then((response) => {
                this.setState({
                    employees: response.data
                });
            });
    }

    render() {
        return (
            <div>
                <div className="col-md-10 offset-md-10">
                    <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#createModal">Add New Employee</button>
                    <ToastContainer/>
                </div>
                <CreateModal />
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {Rows go here} */}
                        {
                            this.state.employees.map((x,i) => {
                                return <TableRow key={i} data={x} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

