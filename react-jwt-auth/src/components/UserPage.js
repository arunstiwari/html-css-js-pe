import React from 'react';
import useDataFetcher from "./hooks/useDataFetcher";

const UserPage = () => {
    const [{data: users, isError, isLoading, error}] = useDataFetcher('user');

    if (isLoading){
        return <div>Loading users...</div>
    }
    if (isError){
        return <div>Error retrieving user information : {error}</div>
    }

    return (
        <div>
            User PAGE
            {users && <div>{users}</div>}
        </div>
    );
};

export default UserPage;