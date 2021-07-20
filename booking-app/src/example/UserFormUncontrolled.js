import React, {useRef, useState} from 'react';

let seq = 5;

const UserFormUncontrolled = () => {
    const [users, setUsers] = useState([]);
    let name = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, {id: seq++, name: name.current.value}]);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input  name="username" ref={name}
                   title='username'
                   placeholder="Enter name"
            />
            <button>Submit</button>
        </form>
            <div>
                {users && users.map((u,i) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </div>
        </>
    );
};

export default UserFormUncontrolled;