import React, {Component} from 'react';
import UsersList from "./UsersList";
import UserForm from "./UserForm";

class UserApp extends Component {
    state ={
       users: [
           {id: 1, name: "User1"},
           {id: 2, name: "User2"},
           {id: 3, name: "User3"},
           {id: 4, name: "User4"}
       ]
    }

    // constructor(props) {
    //     super(props);
    //     console.log('In constructor');
    // }
    //
    // componentDidMount() {
    //     console.log('In componentDidMount');
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate : nextProps ', nextProps, ' nextState: ',nextState);
    //     return true;
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('componentDidUpdate(prevProps, prevState, snapshot ',prevProps, '  ',prevState );
    // }
    //
    // componentDidCatch(error, info) {
    //     console.log(' componentDidCatch(error, info) ',error, ' ', info);
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(' getSnapshotBeforeUpdate ',prevProps, ' ',prevState );
    //     return null;
    // }


    // handleNameChange = (e) => {
    //     console.log('In handleNameChange method: ',e.target.value);
    //     // this.state.name = e.target.value;
    //     this.setState({name: e.target.value });
    //     console.log(' have modified the state variable ');
    // }

    handleSubmit = (user) => {
        // e.preventDefault();
        console.log('In handle submit method');
        // const user = {id: 5, name: this.state.name };

        this.setState({users: this.state.users.concat([user])});
    }
    render() {
        console.log('In render method')
        return (
            <>
            <div>
                <UserForm handleSubmitParent={this.handleSubmit} />
                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <input type="text" placeholder="Name..." onInput={this.handleNameChange} />*/}
                {/*    <button>Save</button>*/}
                {/*</form>*/}
            </div>
             <UsersList userlist={this.state.users} />
            </>
        );
    }
}

export default  UserApp;