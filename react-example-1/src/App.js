import './App.css';
import React from 'react';
import UserApp from './UserApp';
import UserAppWithHook from "./UserAppWithHook";
import {useContext} from "react";

const Title = (props) =>  {
    const title = useContext(TitleContext);
    return (
        <h1>{title}</h1>
    );
}

const Header = (props) =>  {
    return (
        <Title  />
    );
}
const TitleContext = React.createContext('');

const  TitleApp= () =>{
    return (
        <TitleContext.Provider value={'Pattern on DI'}>
            <Header />
        </TitleContext.Provider>

    );
}


const Comment = (props) => {
    return (
        <div>{props.comment.message}</div>
    );
}

const CommentList = ({comments}) => {

    return(
        <div>
        {comments && comments.map(c => (<Comment key={c.id} comment={c} />) )}
        </div>
    )
}
let commentList = [
    {id:1, message: 'Message1'},
    {id:2, message: 'Message2'},
    {id:3, message: 'Message3'}
]
const BlogPost = (props) => {

    return (
        <div>
            <button onClick={()=> props.add(6)} />
            {props.children}
        </div>

        // <CommentList comments={commentList} />
    );
}

const App = () => {
const addNumber = (n) => {
    console.log(n);
}
    return(
        <div>
            {/*<UserApp />*/}
            <UserAppWithHook />
            {/*<TitleApp />*/}
            {/*<BlogPost add={addNumber}>*/}
            {/*    <CommentList comments={commentList} />*/}
            {/*    <button>Add</button>*/}
            {/*</BlogPost>*/}

        </div>
    )
}

export default App;
