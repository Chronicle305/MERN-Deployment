import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Edit = props => {
    const { _id } = useParams();
    const navigate = useNavigate();

    // form variables to handle and contain form data from axios call
    const [myForm, setmyForm] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });

    // useEffect to retrieve database data and set it to the form
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + _id)
            .then(res => setmyForm(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])


    const [error, setError] = useState({});

    const onChangeHandler = e => {
        setmyForm({ ...myForm, [e.target.name]: e.target.value })
    }

    // form submission handler
    const handleFormSubmit = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/update/" + _id, myForm)
            // logic validation
            .then(res => {
                if (res.data.error) {
                    setError(res.data.error.errors)
                } else {
                    // we want to navigate to the show one page
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/"><button className="btn btn-success float-left">Home</button></Link>
            <h2>Know a pet needing a home?</h2>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="name">Pet Name: </label>
                            <input type="text" name="name" className="form-control" value={myForm.name} onChange={onChangeHandler} />
                            {error.name ? <span className="text-danger"> {error.name.message} </span> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Pet Type: </label>
                            <input type="text" name="type" className="form-control" value={myForm.type} onChange={onChangeHandler} />
                            {error.type ? <span className="text-danger"> {error.type.message} </span> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Pet Description: </label>
                            <input type="text" name="description" className="form-control" value={myForm.description} onChange={onChangeHandler} />
                            {error.description ? <span className="text-danger"> {error.description.message} </span> : ""}
                        </div>
                        <h2>Skills (Optional):</h2>
                        <div className="form-group">
                            <label htmlFor="skill1">Skill 1: </label>
                            <input type="text" name="skill1" className="form-control" value={myForm.skill1} onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill2">Skill 2: </label>
                            <input type="text" name="skill2" className="form-control" value={myForm.skill2} onChange={onChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill3">Skill 3: </label>
                            <input type="text" name="skill3" className="form-control" value={myForm.skill3} onChange={onChangeHandler} />
                        </div>
                        <div>
                            <input type="submit" value="Edit Pet" className="btn btn-info" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;