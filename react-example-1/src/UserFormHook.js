import React, {useState} from 'react';

const UserFormHook = ({handleSubmitParent}) => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    const handleNameChange = (e) => {
        console.log('In handleNameChange method: ',e.target.value);
        setName( e.target.value );
        console.log(' have modified the state variable ');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('In handle submit method');
        const user = {id: 5, name: name , email: email};
        handleSubmitParent(user);

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name..." onInput={handleNameChange} />
            <input type="text" placeholder="Email..." onInput={(e) => setEmail(e.target.value)} />
            <button>Save</button>
        </form>
    );
};

export default UserFormHook;