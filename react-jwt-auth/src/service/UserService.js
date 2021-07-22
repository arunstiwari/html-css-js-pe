import axios from "axios";

const API_URL = 'http://localhost:9090/api/test/';

const authHeader = () =>  {
    let user  = JSON.parse(localStorage.getItem('user'));
    console.log('user : ',user.jwt);
    if (user && user.jwt) {
        return {Authorization: 'Bearer ' + user.jwt};
    }
    return  null;
}

class  UserService {

    getData = async (url) => {
        const {data,error}= await  axios.get(API_URL+url ,{headers: authHeader()});
        console.log('data',data);

        return {data, error};
    }
}

export default new UserService();