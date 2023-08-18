import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { listUsers } from "./UsersService";
import UserCard from "./UserCard";

const UsersIndex = () => {
    
    const [users, setUsers] = useState(null);

    useEffect(() => {
        (async () => {       
            const data = await listUsers();
            setUsers(data);
    
        })();
    
      }, []);

      if(users===null){
        return <div>loading...</div>
        }
    
      
        return (
            <div>
                {users.map((item) => ( 
                    <UserCard key={item.id} user={item} />
                ))}
            </div>
        );
    
};

export default UsersIndex;