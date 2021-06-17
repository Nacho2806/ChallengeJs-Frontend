import React, { Component, } from 'react'
import axios from 'axios';

export default class Signin extends Component {

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

    loginUsers = async e =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/users/signin',{
            email: this.state.email,
            password: this.state.password
        });
        console.log(res.data);
        this.setState({ email: '', password: '' });
        window.location.href = '/home';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card md-4 text-center">
                        <div className="card-header">
                            <h1>Account Login</h1>
                        </div>
                        <img src="/login_logo.png" alt="Login_Logo" className="rounded-circle mx-auto d-block m-4 login_logo"/>
                            <div className="card-body">
                                <form onSubmit={this.loginUsers}>
                                    <div className="form-group">
                                        <input onChange={this.handleChangeUser} type="email" 
                                        className="form-control" 
                                        name="email" placeholder="Email" autofocus
                                        value={this.state.email}/>
                                    </div>
                                     <div className="form-group">
                                        <input onChange={this.handleChangeUser} type="password" 
                                        className="form-control" 
                                        name="password" 
                                        placeholder="Password"
                                        value={this.state.password}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                </form>
                            </div>       
                    </div>
                </div>
            </div>
        )
  }
}
