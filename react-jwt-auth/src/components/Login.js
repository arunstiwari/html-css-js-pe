import React, {useState} from 'react';
import AuthenticationService from "../service/AuthenticationService";

const Login = (props) => {
    const [login, setLogin] = useState({
        username:'',
        password:'',
        loading: true,
        isError: false,
        errorMsg: ''
    });

    const handleNameChange =(e) => {
        setLogin({...login, username: e.target.value })
    }

    const handlePasswordChange=(e) => {
        setLogin({...login, password: e.target.value })
    }

    const handleLogin =async (e) => {
        e.preventDefault();
        setLogin({...login, loading:true});
        console.log('login : ',login);
        //able to get the authenticatin data from api server
        let {data, error} = await AuthenticationService.login(login.username, login.password);
        setLogin({...login, loading:false});

        if (data){
            props.history.push('/');
            window.location.reload();
        }
        if (error) {
            console.log('--error---',error);
            setLogin({...login, isError: true, errorMsg: error})
        }
    }

    // if (login.loading){
    //     return <div>Still Validating...</div>
    // }
    if (login.error){
        return <div>Error during login {login.errorMsg}</div>
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="username..." onInput={handleNameChange} />
                <input type="password" placeholder="password..." onInput={handlePasswordChange} />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;