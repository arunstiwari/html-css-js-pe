import React, {useState} from 'react';
import AuthenticationService from "../service/AuthenticationService";

const Register = (props) => {
    const [register, setRegister] = useState({
        username:'',
        password:'',
        email: '',
        loading: true,
        isError: false,
        errorMsg: ''
    });

    const handleNameChange =(e) => {
        setRegister({...register, username: e.target.value })
    }

    const handlePasswordChange=(e) => {
        setRegister({...register, password: e.target.value })
    }

    const handleEmailChange=(e) => {
        setRegister({...register, email: e.target.value })
    }

    const handleRegister =async (e) => {
        e.preventDefault();
        setRegister({...register, loading:true});
        console.log('register : ',register);
        //able to get the authenticatin data from api server
        let {data, error} = await AuthenticationService.register(register.username, register.password, register.email);
        setRegister({...register, loading:false});

        if (data){
            props.history.push('/login');
        }
        if (error) {
            console.log('--error---',error);
            setRegister({...register, isError: true, errorMsg: error})
        }
    }


    return (
        <div>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="username..." onInput={handleNameChange} />
                <input type="password" placeholder="password..." onInput={handlePasswordChange} />
                <input type="email" placeholder="email..." onInput ={handleEmailChange} />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;