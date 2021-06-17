import React, { Component } from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class CreateRegister extends Component {

    constructor(){
        super()
        this.state={
          concept: '',
          amount: '',
          badge: '',
          date: new Date(),
          category: '', 
          _id: '',
          editing: false
        }
    }

    async componentDidMount(){
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/registers/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                concept: res.data.concept,
                amount: res.data.amount,
                badge: res.data.badge, 
                date: new Date(res.data.date),
                category: res.data.category,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        if(this.state.editing){
            const updatedRegister = {
                concept: this.state.concept,
                amount: this.state.amount,
                badge: this.state.badge,
                date: this.state.date,
            };
            await axios.put('http://localhost:4000/api/registers/' + this.state._id, updatedRegister);
        } else{
            const newRegister = {
                concept: this.state.concept,
                amount: this.state.amount,
                badge: this.state.badge,
                date: this.state.date,
                category: this.state.category
            };
            await axios.post('http://localhost:4000/api/registers', newRegister);
        }
        window.location.href = '/home';
    }
    
    render(){
        return(
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a New Register</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Register Concept */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Concept"
                                name="concept"
                                onChange={this.onInputChange}
                                value={this.state.concept}
                                required>
                            </textarea>
                        </div>
                        {/* Register Amount */}
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                onChange={this.onInputChange}
                                name="amount"
                                value={this.state.amount}
                                required />
                        </div>
                        {/* Register Badge */}
                        <div className="form-group">                            
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Badge"
                                onChange={this.onInputChange}
                                name="badge"
                                value={this.state.badge}
                                required></input>
                        </div>
                        {/* Register Date */}
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                        </div>
                        {/* Register Category*/ }
                        <div className="form-group">
                            <input onChange={this.onInputChange} type="radio" name="category" value="income"  required/> Income 
                        </div>
                        <div className="form-group">
                            <input onChange={this.onInputChange} type="radio" name="category" value="expense" required/> Expense
                        </div>
                        <button className="btn btn-primary btn-block">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}            