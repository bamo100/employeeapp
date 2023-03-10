import axios from 'axios'
import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export class UpdateModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    inputEmployeeName = (event) => {
         this.setState({
            employeeName: event.target.value,
         })
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }

    static getDerivedStateFromProps(props, current_state) {
      let employeeUpdate = {
        employeeName: null,
        employeeSalary: null
      }

      //Update data from input
      if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
        return null;
      }

      if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
        return null;
      }


      //Update data from props below

      if(current_state.employeeName !== props.employeeData.currentEmployeeName || 
        current_state.employeeName === props.employeeData.currentEmployeeName) {
        employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
      }

      if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
        current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
        employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
      }

      return employeeUpdate;

    }

    updateEmployeeData = () => {
       axios.post('/update/employee/data', {
          employeeId: this.props.modalId,
          employeeName: this.state.employeeName,
          employeeSalary: this.state.employeeSalary
       }).then((response) => {
          toast.success('Employee Updated Succesfully')
          location.reload()
          setTimeout(() => {
            location.reload()
          }, 2500)
       })
    }

  render() {
    return (
        <div className="modal fade" id={'updateModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
               <form action="" className='form'>
                     <div className="form-group">
                        <input type="text" name="" id="employeeName" 
                        value={this.state.employeeName ?? ""}
                        className='form-control mb-3'
                        onChange={this.inputEmployeeName} />
                     </div>
               </form>
               <hr />
               <form action="" className='form'>
                     <div className="form-group">
                        <input type="text" name="" id="employeeSalary" 
                        value={this.state.employeeSalary ?? ""}
                        className='form-control mb-3'
                        onChange={this.inputEmployeeSalary} />
                     </div>
               </form>
            </div>
            <div className="modal-footer">
                <input type="submit" value='Update'
                className='btn btn-info' id='employeeSalary' 
                onClick={this.updateEmployeeData}/>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateModal