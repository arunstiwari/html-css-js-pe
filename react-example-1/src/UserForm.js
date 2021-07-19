import React, {Component} from 'react';

class UserForm extends Component {

    state ={
        name: ''
    }

    // constructor(props) {
    //     super(props);
    //     console.log('UserForm In constructor');
    //
    //     //remote server
    // }
    //
    // componentDidMount() {
    //     console.log('UserForm In componentDidMount');
    //     //fetch data from remote server
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('UserForm shouldComponentUpdate : nextProps ', nextProps, ' nextState: ',nextState);
    //     return true;
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('UserForm componentDidUpdate(prevProps, prevState, snapshot ',prevProps, '  ',prevState );
    // }
    //
    // componentDidCatch(error, info) {
    //     console.log('UserForm componentDidCatch(error, info) ',error, ' ', info);
    // }
    //
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('UserForm getSnapshotBeforeUpdate ',prevProps, ' ',prevState );
    //     return null;
    // }


    handleNameChange = (e) => {
        console.log('In handleNameChange method: ',e.target.value);
        // this.state.name = e.target.value;
        this.setState({name: e.target.value });
        console.log(' have modified the state variable ');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('In handle submit method');
        const user = {id: 5, name: this.state.name };
        this.props.handleSubmitParent(user);

        // this.setState({users: this.state.users.concat([user])});
    }


    render() {
        console.log('UserForm in render method');
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name..." onInput={this.handleNameChange} />
                <button>Save</button>
            </form>
        );
    }
}

export default UserForm;