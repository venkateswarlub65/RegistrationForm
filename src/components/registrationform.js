import React from 'react';
import { Redirect } from 'react-router-dom';

class Registrationform extends React.Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state={
            loggedIn,
            fname:'',
            lname:'',
            age:'',
            email:'',
            password:'',
            phone:'',
            checkbox1:true,
            checkbox2:false,
            radio1:"Male" 
        }
        // this.onCheckChange=this.onCheckChange.bind(this)
        // this.onRadioChange=this.onRadioChange.bind(this)
        
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onRadioChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onCheckChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.checked
        })
    }

    handlesubmit=(e)=>{
        e.preventDefault();
        const { fname,lname,age,email, password,phone,checkbox2,checkbox1,radio1 } = this.state;
       // this.props.login( fname,lname,age,email, password,phone,checkbox2,checkbox1,radio1);
        //this.props.history.push(dashboard);
        if ( fname !== null &&lname !== null &&age !== null &&email !== null && password !== null && phone !== null &&checkbox2 !== null &&checkbox1 !== null &&radio1 !== null ) {
            localStorage.setItem("token", "abc")
            this.setState({
                loggedIn: true
            })
        }
        // console.log(this.state.fname);
        // console.log(this.state.lname);
        // console.log(this.state.age);
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log(this.state.phone);
        // console.log(this.state.checkbox1);
        // console.log(this.state.checkbox2);
        // console.log(this.state.radio1);
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                <form onSubmit={this.handlesubmit.bind(this)}>
                    <label>Enter Firts Name</label><br></br>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.handlechange} placeholder="Enter First Name.." required/><br></br>
                    <label>Enter Last Name</label><br></br>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.handlechange} placeholder="Enter Last Name.." required/><br></br>
                    <label>Enter Age</label><br></br>
                    <input type="number" name="age" value={this.state.age} onChange={this.handlechange} placeholder="Enter Age .." required/><br></br>
                    <label>Enter Email</label><br></br>
                    <input type="email" name="email" value={this.state.email} onChange={this.handlechange} placeholder="Enter Email .." required/><br></br>
                    <label>Enter Password</label><br></br>
                    <input type="password" name="password" value={this.state.password} onChange={this.handlechange} placeholder="Enter Password .." required/><br></br>
                    <label>Enter Phone Number</label><br></br>
                    <input type="number" name="phone" value={this.state.phone} onChange={this.handlechange} placeholder="Enter Phone Number .." required /><br></br>
                   
                    <label>Enter check</label><br></br>
                    <input type="checkbox" name="checkbox1" 
                    checked={this.state.checkbox1} onChange={this.onCheckChange} /><br></br>
                    <input type="checkbox" name="checkbox2"
                    checked={this.state.checkbox2} onChange={this.onCheckChange} /><br></br>
                    <label>Enter Gender</label><br></br>
                    <input type="radio" name="radio1" 
                    checked={this.state.radio1==="Male"} value="Male" 
                    onChange={this.onRadioChange}  /> Male<br></br>
                    <input type="radio" name="radio1" 
                    checked={this.state.radio1==="Female"}
                     value="Female" onChange={this.onRadioChange} /> Female<br></br>
                    <input type="submit" value="Registration" className="btn btn-primary"/>
                </form>
                {/* check1:{this.state.checkbox1}<br></br>
                check2:{this.state.checkbox2}<br></br>
                male:{this.state.radio1}<br></br>
                female:{this.state.radio1}<br></br> */}
            </div>
        )
    }
}

export default Registrationform;
