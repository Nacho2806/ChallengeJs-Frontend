import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert'

export default class RegisterList extends Component {

    constructor() {
        super();
        this.state = {
          concept: '',
          amount: '',
          badge: '',
          date: '',
          category: '', 
          _id: '',
          registers: [ ]
        };
    }
    
  async componentDidMount(){
      this.getRegisters();
  }

  getRegisters = async () =>{
      const res = await axios.get('http://localhost:4000/api/registers');
      this.setState({registers: res.data});
  }

  deleteRegister = async (registerId) =>{
      swal({
          title: 'Delete Record',
          text: 'Are you sure you want to delete this record?',
          icon: 'error',
          buttons: ['No', 'Yes']
      }).then(async respuesta =>{
          if (respuesta) {
            await axios.delete('http://localhost:4000/api/registers/' + registerId);
            this.getRegisters();
            swal({text: 'The record was successfully deleted',
                icon: 'success'})
          }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="card m-2">
                  <h5 className="card-title font-italic">Your All Moves</h5>
                  <h6 className="card-subtitle mb-2 text-muted font-italic">Here you will find all the operations that you have to write down in your wallet</h6>
                  </div>
                   <div className="card">
                        <div className="card-content">
                        <div className="col-md-10">
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Badge</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                            this.state.registers.map(register => {
                            return (
                                <tr>
                                    <td>{register.concept}</td>
                                    <td>{register.amount}</td>
                                    <td>{register.badge}</td>
                                    <td>{register.date}</td>
                                    <td>{register.category}</td>
                                    <td>
                                    <Link to={"/edit/" + register._id} className="btn btn-warning" style={{margin: '4px'}}>
                                        <i className="material-icons">
                                            edit</i>
                                    </Link>
                                    <button onClick={() => this.deleteRegister(register._id)} className="btn btn-danger">
                                        <i className="material-icons">delete</i> 
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}    