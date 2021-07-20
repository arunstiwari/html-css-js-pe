import React, {useState} from 'react';
import useForm from "./hooks/useForm";
import useFormWithValidation from "./hooks/useFormWithValidation";
import validate from "./validate";

const FormWithValidation = ({}) => {
    // const [user, setUser] = useState({});
    const callback = (values,errors) => {
        console.log('---in callback---', values);
        //api
    }
    const {values, handleInputChange, handleSubmit,errors} = useFormWithValidation(callback,validate);
    const submitToApi = () => {
        //api
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text"
                     placeholder="Enter email"
                     name="email"
                     onInput={handleInputChange}
                    value={values.email || ''}
                     required
              />
              {
                  errors.email && (<p>{errors.email}</p>)
              }
              <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onInput={handleInputChange}
                  required
                  value={values.password || ''}
              />
              {
                  errors.password && (<p>{errors.password}</p>)
              }
              <button>Submit</button>
          </form>
        </div>
    );
};

export default FormWithValidation;