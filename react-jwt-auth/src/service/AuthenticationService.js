import axios from "axios";

const URL = 'http://localhost:9090/api/auth/'

class AuthenticationService {

    getUser =  () => {
        return JSON.parse(localStorage.getItem('user'));
    }

    login = async (username, password) => {
         const {data, error}   = await axios.post(URL+'signin', {
              username,
              password
            });
        console.log('--data', data);
        console.log('--error', error);

        if (data.jwt) {
            localStorage.setItem("user",JSON.stringify(data) );
        }
        return {data, error}
    }

    register = async (username, password, email) => {
        const {data, error}   = await axios.post(URL+'signup', {
            username,
            password,
            email
        });
        console.log('--data', data);
        console.log('--error', error);

        return {data, error}
    }
}

export default new AuthenticationService();