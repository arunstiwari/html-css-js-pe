import React, {useReducer, useState} from 'react';
import {bookables,days,sessions} from '../../data.json';
import {FaArrowRight} from "react-icons/all";
import reducer from "./reducer";

const initialState = {
    group: 'Rooms',
    bookableIndex: 0,
    bookables: bookables
}

const BookablesList = () => {
    // const[group, setGroup] = useState('Kit');
    const [state, dispatch] = useReducer(reducer,initialState);
    const {group, bookableIndex} = state;

    const bookablesInGroup = bookables.filter(b => b.group === group);
    // const [bookableIndex, setBookableIndex] = useState(0);

    const groups = [...new Set(bookables.map( b => b.group))];

    const bookable = bookablesInGroup[bookableIndex];
    const [hasDetails, setHasDetails] = useState(false);

    const changeBookable = (i) => {
        // setBookableIndex(i);
        // console.log('i : ',i);
        dispatch({
            type: 'SET_BOOKABLE_INDEX',
            payload: i
        })
    }

    const nextBookable = () => {
        // setBookableIndex(i => (i+1)%bookablesInGroup.length);
        dispatch({
            type: 'NEXT_BOOKABLE'
        })
    }

    const changeGroup = (e) => {
        dispatch({
            type: 'SET_GROUP',
            payload: e.target.value
        })
        // setGroup(e.target.value);
        // setBookableIndex(0);
    }
    return (
        <>
        <div>
            <select value={group} onChange={changeGroup } >
                { groups.map((g,i) => <option key={g} value={g}>{g}</option>)}
            </select>
            <ul className="bookables  items-list-nav">
                {
                    bookablesInGroup.map((b,i) => (
                        <li key={b.id} className={i === bookableIndex? "selected": null}>
                            <button className={"btn"} onClick={() => changeBookable(i)} >{b.title}</button>
                        </li>
                    ))
                }
            </ul>
            <p>
                <button className='btn' onClick={nextBookable} autoFocus>
                    <FaArrowRight />
                    <span>Next</span>
                </button>
            </p>
        </div>
            {
                bookables && (
                    <div className='item'>
                        <div className="item-header">
                            <h2>{bookable.title}</h2>
                            <span className="controls">
                                <input type="checkbox"
                                        checked={hasDetails}
                                       onChange={()=> setHasDetails(has => !has)}/>
                                Show Details
                            </span>
                        </div>

                        <p>{bookable.notes}</p>
                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {bookable.days.sort().map(d => <li key={d}>{days[d]}</li>)}
                                    </ul>
                                    <ul>
                                        {bookable.sessions.map(d => <li key={d}>{sessions[d]}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </>
    );
};

export default BookablesList;