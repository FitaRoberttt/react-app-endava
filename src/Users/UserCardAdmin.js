import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {

    const navigate = useNavigate();
    return (
        <div className="userCardStyles">
       
       <div className="Name">Name: {props.user.name}</div>
        <div className="Email">Email: {props.user.email}</div>
        <div className="Username">Username: {props.user.username}</div>
        <div className="Phone">Phone: {props.user.phone}</div>
       
      <div className="buttonsAdminDiv">
       <button className="buttonsAdmin" onClick={() => navigate(`/admin/${props.user.id}`)}>
                {" "}
                Update
            </button>
            <button className="buttonsAdmin" onClick={() => navigate(`/admin/${props.user.id}`)}>
                {" "}
                Delete
            </button>
        </div>

        </div>
       
    );

};

export default UserCard;