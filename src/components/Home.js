import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
          registers: [ ],
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

    getBalance = async (e) =>{
        const res = await axios.get('http://localhost:4000/api/registers');
        this.setState({registers: res.data});
        console.log(this.state.registers)
        var addExpense = 0
        var addIncome = 0
        var balance = 0
        var i = 0 ;
        while (i < this.state.registers.length){
            if(this.state.registers[i].category === 'expense'){
                addExpense += this.state.registers[i].amount;
            }else{
                addIncome += this.state.registers[i].amount
            }  
            i++;
        }    
        balance = addIncome - addExpense;    
        swal({
            title: 'Balance',
            text: `Current Balance: €${balance}`,
            icon: 'success',
            button: 'Accept'   
        });
    }   

    render(){
        return(
            <div className="container">
                <div className="card card-title"><h1>Hello</h1>
                    <div className="card">
                    <p>Welcome to the Home of your account, where you can observe the latest 
                    movements and your balances, as well as add new operations.</p>
                    <div className="section"> 
                        <Link to="/create" className="btn btn-primary">
                            Add New Operation</Link>
                        <Link to="/moves" className="btn btn-success m-2">
                            See All Your Movements</Link>   
                        <Link onClick={this.getBalance} className="btn btn-primary">
                            Look At Your Balance</Link>    
                    </div>
                    </div>
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













            