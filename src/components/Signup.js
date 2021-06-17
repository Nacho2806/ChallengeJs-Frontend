import axios from 'axios';
import React, { Component } from 'react'

export default class Signup extends Component {

    constructor(){
       super();
       this.state = {
        email: '',
        password: '',
        users: []
      };
    }  

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
        console.log(res);
    }

    handleChangeUser = (e) =>{
        const { name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    createUser = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users/signup',{
            email: this.state.email,
            password: this.state.password
        });
        this.setState({ email: '', password: '' });
        window.location.href = '/signin';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 mx-auto offset-md-3">
                     <div className="card md-4 text-center">
                        <div className="card-header">
                            <h1>Account Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.createUser}>
                                <div className="form-group">
                                    <input onChange={this.handleChangeUser} type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="Enter Email"
                                    value={this.state.email}/>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChangeUser} type="password" 
                                    className="form-control" 
                                    name="password" placeholder="Password"
                                    value={this.state.password}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
