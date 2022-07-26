import axios from 'axios'
import { Query } from 'mongoose';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = props => {
    // create your use states
    const [pets, setPets] = useState(null);
    // useEffect
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    })



    return (
        <div className='container'>
            <h2>These pets are looking for a good home</h2>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets ? pets.map((item, index) =>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td><Link to={`/pet/${item._id}`}><button className='btn btn-info'>Details</button></Link> | <Link to={`/pet/edit/${item._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
                            </tr>) : ""
                    }
                </tbody>
            </table>
            <div>
                <Link to={"/add"}><button className='btn btn-danger'>Add a pet to the shelter</button></Link>
            </div>
        </div>
    );
}

export default Home;