import React, {useEffect, useReducer, useRef, useState} from 'react';
import {days,sessions} from '../../data.json';
import {FaArrowRight} from "react-icons/all";
import reducer from "./reducer";
import Spinner from "../UI/Spinner";

const initialState = {
    group: 'Rooms',
    bookableIndex: 0,
     bookables : [],
    hasDetails: true,
    isLoading: true,
    error: false
}

const BookablesList = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    const {group, bookableIndex, hasDetails ,bookables, isLoading} = state;

    const bookablesInGroup = bookables.filter(b => b.group === group);
    const groups = [...new Set(bookables.map( b => b.group))];
    const bookable = bookablesInGroup[bookableIndex];

    const timerRef = useRef(null);

    useEffect(()=> {
        dispatch({type: 'FETCH_BOOKABLE_REQUEST'});

        const fetchBookableData = async () => {
            try{
                const response = await fetch("http://localhost:3002/bookables");
                const data = await response.json();
                dispatch({type: 'FETCH_BOOKABLE_SUCCESSFULL', payload: data});
            }catch (error){
                dispatch({type: 'FETCH_BOOKABLE_ERROR', payload: error});
            }
        }

        fetchBookableData();
    }, [props.xyz])

    useEffect(() => {
        timerRef.current = setInterval(() => {
            dispatch({
                type: 'NEXT_BOOKABLE'
            })
        },3000);

        return () => {clearInterval(timerRef.current)};

    },[]);

    const stopPresentation = () => {
        clearInterval(timerRef.current);
    }

    const changeBookable = (i) => {
        dispatch({
            type: 'SET_BOOKABLE_INDEX',
            payload: i
        })
    }

    const nextBookable = () => {
        dispatch({
            type: 'NEXT_BOOKABLE'
        })
    }

    const changeGroup = (e) => {
        dispatch({
            type: 'SET_GROUP',
            payload: e.target.value
        })
    }

    const toggleDetails = () => {
        dispatch({
            type: 'TOGGLE_HAS_DETAILS'
        })
    }

    if(isLoading){
        return <p><Spinner />Loading Bookables data ...</p>
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
                bookable && (
                    <div className='item'>
                        <div className="item-header">
                            <h2>{bookable.title}</h2>
                            <span className="controls">
                                <input type="checkbox"
                                        checked={hasDetails}
                                       onChange={toggleDetails}/>
                                Show Details
                                <button onClick={stopPresentation}>Stop</button>
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