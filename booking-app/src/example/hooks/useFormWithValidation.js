import {useState} from "react";


const useFormWithValidation = (callback,validate) => {
    const[values, setValues] = useState({});
    const[errors, setErrors] = useState({});
    const[isSubmitted, setIsSubmitted] = useState(false);


    const handleInputChange = (event) => {
        setValues({...values, [event.target.name]:event.target.value});
        console.log('---values---',values);
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitted(true);
         callback(values,errors);
        // let o ={};
        //
        // for(let key of Object.keys(values)){
        //     o[key]='';
        // }
        // setValues({...values,...o});
    }

    return {
        values,
        handleInputChange,
        handleSubmit,
        errors,
        isSubmitted
    }
}

export default  useFormWithValidation;