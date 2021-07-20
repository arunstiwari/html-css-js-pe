import React, {useEffect, useState} from 'react';

const fetchUsers =  async ()=> {
    const response = await fetch("http://localhost:3002/users");
    const userList = await response.json();
    return userList;
}

let seq = 5;
const UserApp = () => {
    const [users, setUsers] = useState([]);
    const[name, setName] = useState('');

    useEffect(()=>{
        const loadUsers =  async ()=> {
            // const data = await fetchUsers();
            const response = await fetch("http://localhost:3002/users");
            const data = await response.json();
            setUsers(data);
            console.log('---users---',data);
        }

        loadUsers();
    },[])

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, {id: seq++, name: name}]);
        setName('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}  name="username" onInput={handleNameChange}
                       title='username'
                       placeholder="Enter name"
                />
                <button>Submit</button>
            </form>

            <div>
                {users.map(u => (<li key={u.id}>{u.name}</li>))}
            </div>
        </div>
    );
};

export default UserApp;