import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {

    return (
        <div className="usersStyles">
            <Outlet />
        </div>
    );

};

export default Users;