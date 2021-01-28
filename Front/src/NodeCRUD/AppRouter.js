import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Add from './Add'
import List from './List'
import Header from './../Header';
import Foot from './../Footer';

const config = {
    headers: {
       'Content-Type':  'application/json; charset=utf-8',
       'Accept': 'application/json'
    }
  };

export default class AppRouter extends React.Component {
    state = {
        movieData: []
    }
    
    
    componentDidMount() {

        this.getStudentData();
    }
    
    getStudentData=()=>{
        axios.get("http://localhost:8000/movies/list").then(res => {
            console.log(res.data);
            this.setState({
                movieData: res.data
            })
        })
    }
    
    AddHandler = (_object) => {
        console.log(_object);
        axios.post("http://localhost:8000/movies/add",_object,config).then(res=>{
            this.getStudentData();
        })
        //Server Request

    }


    render() {
        return (
            <Router>
                <Header/>
                <Route component={() => <List StdArray={this.state.movieData} />} path="/" exact/>
                <Route component={() => <List StdArray={this.state.movieData} />} path="/List"  exact/>
                <Route component={() => <Add RequestHandler={this.AddHandler} />} path="/AddnewMovie" exact />
                <Foot/>
            </Router>
        )


    }
}