import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Media} from 'reactstrap';
import axios from 'axios'


let List= (props) => {
    function DeleteMovie(movie){
        axios.delete(`http://localhost:8000/movies/delete/${movie}`).then(res=>{
                
        })
    }
    return (
        <div>
            <ul>
                {props.StdArray.map((movie,i)=>{
                    if(movie.image == null){
                        movie.image = 'images/4.jpg'
                    }
                    return(
                        <>
                    <div key={movie.id} className="col-12 mt-5">

                    <Media tag="li">
                        <Media left middle>
                            <Media object src={movie.image} alt={movie.name}/>
                        </Media>
                        <Media body className="ml-5">
                        <Media heading >
                            {movie.name}
                        </Media>
                        <p>
                            {movie.desc}
                        </p>
                        <p>
                            {movie.year}
                        </p>
                        
                        </Media>
                        <button onClick={() => DeleteMovie(movie._id)} class="btn btn-danger" >Delete Movie</button>

                    </Media>
                    </div>
                    </>
                    )
                })}
            </ul>

            <Link className="btn btn-outline-success" to="/AddnewMovie">Add new movie</Link>
        </div>
    )
}

export default withRouter(List);

