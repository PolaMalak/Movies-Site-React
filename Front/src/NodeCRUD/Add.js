import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'




class Adding extends React.Component {

    state = {
        
        movid: '',
        movName: '',
        movYear:'',
        movDesc:''
     }
    
    FormSubmitEvent = (e) => {
        e.preventDefault();
        let newMovie={
            id:parseInt(this.state.movid),
            name:this.state.movName,
            year:parseInt(this.state.movYear),
            desc:this.state.movDesc,
            
        }
        this.props.RequestHandler(newMovie);
        this.props.history.push("/List");

    }
    render() {
        return (
            <>
                <form onSubmit={this.FormSubmitEvent}>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-1 col-form-label">ID</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" placeholder="movie Id"
                                value={this.state.movid}
                                onChange={(e) => this.setState({ movid: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-1 col-form-label">Name</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" placeholder="movie Name"
                                value={this.state.movName}
                                onChange={(e) => this.setState({ movName: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-1 col-form-label">Year</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" placeholder="movie year"
                                value={this.state.movYear}
                                onChange={(e) => this.setState({ movYear: e.target.value })}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-1 col-form-label">Description</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" placeholder="movie Description"
                                value={this.state.movDesc}
                                onChange={(e) => this.setState({ movDesc: e.target.value })}

                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(Adding)