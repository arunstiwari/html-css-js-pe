import React, {useEffect, useState} from 'react';
import UserForm from "./UserForm";
import UsersList from "./UsersList";
import UserFormHook from "./UserFormHook";
import axios from "axios";
import useDataFetcher from "./useDataFetch";

const UserAppWithHook = () => {
    // const [variable, setVariable] = useState('')
//     const[users, setUsers] = useState(
// [
//             {id: 1, name: "User1",email: ''},
//             {id: 2, name: "User2",email: ''},
//             {id: 3, name: "User3",email: ''},
//             {id: 4, name: "User4",email: ''}
//          ])

    // const [users, setUsers] = useState([]);
    // const[isLoading, setIsLoading] = useState(true);
    // const[isError, setIsError] = useState(false);

    // useEffect( ()=> {
    //     const fetchUsers =  async () => {
    //         try{
    //             const {data} = await axios.get("http://localhost:8900/users232");
    //             console.log('--data---', data);
    //             setUsers(data);
    //             setIsLoading(false);
    //         }catch (e) {
    //             setIsError(true);
    //             setIsLoading(false);
    //         }
    //
    //
    //     }
    //     fetchUsers();
    //
    // },[])

    const [{data: users, isLoading, isError}] = useDataFetcher("http://localhost:8900/users323");

    const handleSubmit = (user) => {
        // e.preventDefault();
        console.log('In handle submit method', user);
        // setUsers([...users,user])
    }

    if (isLoading){
        return (
            <div>Loading ...</div>
        )
    }
    if (isError){
        return (
            <div>Error retrieving the users information</div>
        )
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