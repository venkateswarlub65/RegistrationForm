import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Registrationform from '../components/registrationform'


class dashboard extends React.Component {
    constructor(props){
        super(props);
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to='/'/>
        }
        return (
            <div>
                 <h3>User List</h3>
                <Link to='/logout'>Go to registration</Link>
                {this.props.fname}
            </div>
        )
    }
}

export default dashboard;