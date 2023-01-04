import React, { Component } from 'react'
import TableActionButtons from './TableActionButtons'

export class TableRow extends Component {
  
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <tr>
            <td>{ this.props.data.id }</td>
            <td>{ this.props.data.employee_name }</td>
            <td>{ this.props.data.Salary }</td>
            <td>
                <TableActionButtons eachRowId={this.props.data.id} />
            </td>
       </tr>
    )
  }
}

export default TableRow