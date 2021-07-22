import React, {Component} from 'react';


const HocComponenent = (WrappedComponent, data) =>{
    return class extends Component{
        state={
            data: data
        }
        render() {
            return(
                <WrappedComponent {...this.props} data={this.state.data} />
            )
        }
    }
}


const StockApp = (props) => {
    return (
        <div>
            Stock Page
            {props.data.map(u=>(
                <p key={u.id}>{u.name}</p>
            ))}
        </div>
    )
}

const UserApp = (props) => {
    return (
        <div>
            User Page
            {props.data.map(u=>(
                <p key={u.id}>{u.name}</p>
            ))}
        </div>
    )
}

let stocks = [
    {id:1, name: 'Stock1'},
    {id:2, name: 'Stock2'},
    {id:3, name: 'Stock3'},
];

let users = [
    {id:1, name: 'User1'},
    {id:2, name: 'User2'},
    {id:3, name: 'User3'},
];
const Stocks = HocComponenent(StockApp, stocks);
const Users = HocComponenent(UserApp, users);
const HocApp = () => {
    return (
        <div>
            <Stocks />
            <Users />
        </div>
    );
};

export default HocApp;