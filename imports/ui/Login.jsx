import React from 'react';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        Meteor.loginWithPassword('gigelfrone@lover.com', '12345', function (err) {
            if (!err) {
                console.log('I was called because authentication was a success')
            } else {
                console.log(err);
            }
        })
    }
    createUser(){
        Accounts.createUser({
            email: 'gigelfroneSuperTarasdasdae@lover.com',
            password: '12345'
        })
    }
    logout(){
        Meteor.logout(function (err) {
            if (!err) {
                console.log('Logout was a success!')
            } else {
                console.log(err);
            }
        });

    }

    render() {
        return (
            <div>
                <h1>SALUUUUUUUUUT</h1>
                <form onSubmit={this.handleSubmit} onClick={this.loginWithPassword}>
                    <input type='text' placeholder="Username" value={this.state.value}
                           onChange={this.handleChange}/>
                    <input type='submit' value='Click' onClick={this.createUser}/>
                    <input type='button' value='Logout' onClick={this.logout}/>
                </form>
            </div>
        );

    }
}
