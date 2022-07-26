import { useParams, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";


const OnePet = props => {
    const { _id } = useParams();
    const navigate = useNavigate();

    // set up use states
    const [pet, setPet] = useState("");

    // retrieve data from the databse that matches the ID from the URL and set it to useState
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + _id)
            .then(res => setPet(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])

    // delete/adopt pet call. This call deletes pet from DB and navigates back to the home page
    const deleteItem = () => {
        axios.delete("http://localhost:8000/api/pets/delete/" + _id)
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h2>Details about: {pet.name}</h2><br />
            <div className="container">
                <h3>Pet type: {pet.type}</h3><br />
                <h3>Pet description: {pet.description}</h3><br />
                <h3>Skills: {pet.skill1},<br /> {pet.skill2},<br /> {pet.skill3}</h3>
            </div>
            <div>
                <button className="btn btn-danger" onClick={deleteItem}>Adopt {pet.name}</button> | <Link to="/"><button className="btn btn-success float-left">Home</button></Link>
            </div>

        </div>
    );
}

export default OnePet;