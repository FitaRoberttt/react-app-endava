import React from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {

    return (
       <Link to={`/${props.user.id}`} className="userCardStyles">
        <div className="Name">Name: {props.user.name}</div>
        <div className="Email">Email: {props.user.email}</div>
        <div className="Username">Username: {props.user.username}</div>
        <div className="Phone">Phone: {props.user.phone}</div>
       </Link>
       
    );

};

export default UserCard;