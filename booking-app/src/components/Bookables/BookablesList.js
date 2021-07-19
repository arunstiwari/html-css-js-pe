import React, {useState} from 'react';
import {bookables} from '../../data.json';

const BookablesList = () => {

    const bookablesInGroup = bookables.filter(b => b.group === 'Rooms');
    const [bookableIndex, setBookableIndex] = useState(0);

    const changeBookable = (i) => {
        setBookableIndex(i);
        console.log('i : ',i);
    }

    return (
        <ul className="bookables  items-list-nav">
            {
                bookablesInGroup.map((b,i) => (
                    <li key={b.id} className={i === bookableIndex? "selected": null}>
                        <button className={"btn"} onClick={() => changeBookable(i)} >{b.title}</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default BookablesList;