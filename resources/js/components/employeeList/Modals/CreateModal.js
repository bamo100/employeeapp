import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export class CreateModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeName: null,
            employeeSalary: null,
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

   storeEmployeeData = () => {
       axios.post('/store/employee/data', {
          employeeName: this.state.employeeName,
          employeeSalary: this.state.employeeSalary
       }).then(() => {
        toast.success('Employee Saved Successfully')

        setTimeout(() => {
            location.reload()
        }, 2500);
       })
   }

  render() {
    return (
        <>
            <div className="row text-right mb-3 pb-3">
                <button className="btn btn-info text-right col-3 offset-md-9"
                   data-toggle='modal'
                   data-target="#modalCreate">
                     Add New Employee
                </button>
            </div>
            <div className="modal fade" id='modalCreate' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            placeholder='Name here'
                            onChange={this.inputEmployeeName}
                            className='form-control mb-3' />
                        </div>
                </form>
                <hr />
                <form className='form'>
                        <div className="form-group">
                            <input type="text" name="" id="employeeSalary" 
                            placeholder='Salary here'
                            className='form-control mb-3'
                            onChange={this.inputEmployeeSalary} />
                        </div>
                </form>
                </div>
                <div className="modal-footer">
                <input type="button" id="employeeSalary" 
                            value= 'Save'
                            onClick={this.storeEmployeeData} 
                            className='btn btn-info'/>

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
                </div>
            </div>
            </div>
        </div>
        </>
        )
  }
}

export default CreateModal