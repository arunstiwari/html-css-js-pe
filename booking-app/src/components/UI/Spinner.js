import React from 'react';
import {FaSpinner} from "react-icons/all";

const Spinner = (props) => {
    return (
        <span {...props}>
            <FaSpinner className="icon-loading" />
        </span>
    );
};

export default Spinner;