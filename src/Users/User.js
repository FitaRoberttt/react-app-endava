import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser } from "./UsersService";


const User = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    
    useEffect(() => {
        (async () => {
            
            const user = await getUser(id);
            setUser(user);
        })();
    }, [id]);

    
    if(user === null){
        return <div>loading user...</div>
    }
    

    return (
        <div>
        <div>
             <button className="ButtonBack" onClick={() => navigate(-1)}>
                {" "}
                Back
            </button>
        </div>
        <div className="userCardStylesPreview">
        
            <p>Id:{user.id}</p>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Username:{user.username}</p>
            <p>Phone:{user.phone}</p>
            <p>Website:{user.website}</p>
            <p>Company:{user.company.name}</p>
            <p>City:{user.address.city}</p>
            <p>Street:{user.address.street}</p>
            <p>Suite:{user.address.suite}</p>
            <p>Zipcode:{user.address.zipcode}</p>  
 

        </div>
        </div>
    );

};

export default User;