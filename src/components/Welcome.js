import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
  render() {
    return (
      <div className="container p-4">
        <div className="card card-body">
            <h1 className="display-4">Welcome a Personal Budget Management</h1>
            <p className="lead">The most effective wallet that will help you keep your income and expenses in order</p>
            <hr className="mt-4"/>
            <p>Personal Budget Management is today the best option in the financial field, since it allows
            you to keep a daily control of your income and expenses. Best of all, it's free and you can use 
            it from anywhere in the world.</p>
            <Link to="/signup" className="btn btn-success btn-block"> Start using the app today!</Link>
        </div>
     </div>
    )
  }
}
