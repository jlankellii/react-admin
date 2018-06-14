import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Home extends Component{
    // constructor(props){
    //     super(props);
    //     console.log(props.location.pathname);
    //     console.log(JSON.parse(localStorage.getItem("zoie_user")).username);
    // }
    render(){
        return(
            localStorage.getItem("zoie_user")===null?
            <Redirect to="/login"/>:
            <Redirect to="/app"/>
        )
    }
}