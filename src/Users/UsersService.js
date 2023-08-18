export const listUsers = async () => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            console.log(error);
        });

}

export const getUser = async (id) => {

    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            console.log(error);
        });

}

//update user
export const updateUser = async (payload) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(!response.ok){
        throw new Error('Something went wrong');
    }

    return await response.json();

}

//delete user

export const deleteUser = async (id) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });

    if(response.ok){
        return await response.json();
        
    }
    
    throw new Error('Something went wrong');

    

}

//create user

export const createUser = async (payload) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(!response.ok){
        throw new Error('Something went wrong');
    }

    return await response.json();

}
