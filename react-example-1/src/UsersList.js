import React from 'react';
import User from "./User";

const UsersList = ({userlist}) => {
    console.log(userlist);
    return (
        <div>
            <ul>
                {userlist.map(user => {
                    return <User  user={user} />
                })}

            </ul>
    </div>
    );
};

export default UsersList;