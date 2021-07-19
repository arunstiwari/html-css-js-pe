import React, {useState} from 'react';
import UserForm from "./UserForm";
import UsersList from "./UsersList";
import UserFormHook from "./UserFormHook";

const UserAppWithHook = () => {
    // const [variable, setVariable] = useState('')
    const[users, setUsers] = useState(
[
            {id: 1, name: "User1",email: ''},
            {id: 2, name: "User2",email: ''},
            {id: 3, name: "User3",email: ''},
            {id: 4, name: "User4",email: ''}
         ])


    const handleSubmit = (user) => {
        // e.preventDefault();
        console.log('In handle submit method', user);
        setUsers([...users,user])
    }

    return (
        <>
            <div>
                <UserFormHook handleSubmitParent={handleSubmit} />
                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <input type="text" placeholder="Name..." onInput={this.handleNameChange} />*/}
                {/*    <button>Save</button>*/}
                {/*</form>*/}
            </div>
            <UsersList userlist={users} />
        </>
    );
};

export default UserAppWithHook;