import { Component } from "react";
import TableActions from "./TableActions";

class TableRow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <tr>
                <th scope="row">{ this.props.data.id }</th>
                <td>{ this.props.data.employee_name }</td>
                <td>${ this.props.data.salary }</td>
                <td>
                    <TableActions eachRowId={ this.props.data.id } />
                </td>
            </tr>
        );
    }
}

export default TableRow;