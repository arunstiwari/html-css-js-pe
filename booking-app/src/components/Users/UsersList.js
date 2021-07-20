import React, {useEffect, useState} from 'react';
import Spinner from "../UI/Spinner";

const UsersList = () => {
    const [users, setUsers] = useState(null);
    const [userIndex, setUserIndex] = useState(0);
    const user = users?.[userIndex];

    useEffect(()=>{
        const fetchUsers = async () => {
            const response = await fetch("http://localhost:3002/users");
            const usersList = await response.json();
            console.log('---users---',usersList);
            setUsers(usersList);
        }

        fetchUsers();
    },[])

    if (users === null){
        return <p><Spinner />Loading Users ...</p>
    }

    return (
        <>
            <ul className="users items-list-nav">
                {
                    users.map( (u,i) => (
                        <li key={u.id} className={i === userIndex? "selected": null}>
                            <button className='btn' onClick={()=> setUserIndex(i)}>{u.name}</button>
                        </li>
                    ) )
                }
            </ul>
            {user && (
                <div className="item user">
                    <div className="item-header">
                        <h2>{user.name}</h2>
                    </div>
                    <div className="user-details">
                        <h3>{user.title}</h3>
                        <p>{user.notes}</p>
                    </div>
                </div>
            )}
        </>

    );
};

export default UsersList;