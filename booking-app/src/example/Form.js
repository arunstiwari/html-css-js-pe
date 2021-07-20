import React, {useState} from 'react';
import useForm from "./hooks/useForm";

const Form = ({}) => {
    // const [user, setUser] = useState({});
    const callback = (values) => {
        console.log('---in callback---', values);
        //api
    }
    const {values, handleInputChange, handleSubmit} = useForm(callback);

    return (
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text"
                     placeholder="Enter email"
                     name="email"
                     onInput={handleInputChange}
                    value={values.email || ''}
              />
              <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onInput={handleInputChange}
                  value={values.password || ''}
              />
              <button>Submit</button>
          </form>
        </div>
    );
};

export default Form;