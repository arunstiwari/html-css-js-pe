import {useState} from "react";


const useForm = (callback) => {
    const[values, setValues] = useState({});


    const handleInputChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value})
        console.log('---values---',values);
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback(values);
        let o ={};

        for(let key of Object.keys(values)){
            o[key]='';
        }
        setValues({...values,...o});
    }

    return {
        values,
        handleInputChange,
        handleSubmit
    }
}

export default  useForm;