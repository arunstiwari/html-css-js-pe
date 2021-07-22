import React from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';

const AppWithRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route path="/feed" component={Feed}  />
                <Route exact path="/question/:id/details" component={DetailQuestion} />
                <Route exact path="/question/:id" component={Question} />
                <Route path="/question" component={Question} />
            </Switch>
        </>
    );
};

export default AppWithRouter;

const DetailQuestion = (props) => {
    console.log('---props---', props);

    const goBack = () => {
        console.log('In goBack--');
     const {history} = props;
        console.log('In goBack--',history);
     history.push('/',{productId: '123'});
    }
    return(
        <div>
            Detail Page
        <button onClick={goBack}>Back</button>
        </div>
    )
}

const Question = (props) => {
    console.log('--question props ---', props);
    const {id} = props.match.params;
    console.log('--id: ' + id);
    return(
        <div style={{border: '1px solid green'}}>
            <h1>Question Page</h1>
            <li><Link to={`${props.location.pathname}/details?search=${id}`}>Employee1</Link></li>

        </div>
    )
}


const Feed = () => {
    return(
        <div style={{border: '1px solid green'}}>Feed Page</div>
    )
}

const Home = (props) => {
    console.log('--props---', props);
    return(
        <div style={{border: '1px solid red'}}>Home Page</div>
    )
}

const Header = () => {
    return(
        <nav className='nav'>
            <a><Link to="/">Home</Link></a>
            <a><Link to="/feed">Feed</Link></a>
            <a><Link to="/question">Question</Link></a>
        </nav>
    )
}