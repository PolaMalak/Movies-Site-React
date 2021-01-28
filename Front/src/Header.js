import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavbarBrand ,Nav} from 'reactstrap';
import {Link} from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navbar  style={{padding:"0rem",ustifyContent:"normal"}}  color="light">
            <img src={`./Netflix-Logo.png`} style={{height:"70px" , width: "100px",marginLeft:"20px"}}/>
                <div className="container" style={{justifyContent:"normal",  display: "flex"}}>
                <Link class="nav-link" to="/Home">Home </Link>
                <Link class="nav-link" to="/List">Movies </Link>
                <Link class="nav-link" to="/AddnewMovie">add movie </Link>
                <Link class="nav-link" to="/UpdateMovie">update movie </Link>

                </div>
            </Navbar>
        )
    }
}
export default Header;