import React from "react";
import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, updateUser, deleteUser, createUser } from "./UsersService";


const UserEdit = () => {

    const {id} = useParams();
    const [form, setForm] = useState({
        id: "",
        name: "",
        email: "",
        username: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id !== undefined) {
          (async () => {
            try {
              const user = await getUser(id);
              setForm(user);

            } catch (err) {
              console.log(err);
              //navigate("/admin");
            }
          })();
        } else {
          setForm({
            id: "",
            name: "",
            email: "",
            username: "",
          });
        }
      }, [id]);

   const updateField = ({name,value}) => {
         setForm({
              ...form,
                [name]: value,
         });
    }

    const handleUpdate = async () => {
        try {
            navigate('/admin');
          await updateUser(form);
          
          alert(`Updated ${form.name}`);
        } catch (e) {
            
          console.warn(e);
        }
      };

    const handleDelete = async () => {
        try {
            navigate(`/admin`);
            await deleteUser(form.id);
            alert(`Deleted ${form.name}`);
            
        } catch (e) {
            console.warn(e);
        }
    };

    const handleCreate = async () => {
        try {
            navigate('/admin');
            await createUser(form);
            alert(`Created ${form.name}`);
            
        } catch (e) {
            console.warn(e);
        }
    };

    if (form === null) {
        return <div>Loading...</div>;
      }
    

    return (
        <form className="UserEdit">
            <input
                type="text"
                name="id"
                placeholder="Id"
                className="UserEdit-Input"
                value={form.id}
                onChange={({ target }) => updateField(target)}

            />
            <input

                type="text"
                name="name"
                placeholder="Name"
                className="UserEdit-Input"
                value={form.name}
                onChange={({ target }) => updateField(target)}
            />
            <input

                type="text"
                name="email"
                placeholder="Email"
                className="UserEdit-Input"
                value={form.email}
                onChange={({ target }) => updateField(target)}
            />
            <input

                type="text"
                name="username"
                placeholder="Username"
                className="UserEdit-Input"

                value={form.username}
                onChange={({ target }) => updateField(target)}
            />
            <button className="ButtonsEdit" onClick={handleUpdate}>Update</button>
            <button className="ButtonsEdit" onClick={handleDelete}>Delete</button>
            <button className="ButtonsEdit" onClick={handleCreate}>Create</button>
            <button className="ButtonsEdit" onClick={() => navigate('/admin')}>
                {" "}
                Back
            </button>
        </form>
    );



}

export default UserEdit;