import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    onChange = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state)
    }

    onClick = (event) => {
        event.preventDefault();
        if (this.state.username.length < 4 || this.state.password.length < 8) {
            alert("Username too short (4), and/or password too short (8)")
            return;
        }
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (event.target.name === "login") {
            this.props.login(user)
        } else {
            this.props.register(user);
        }
    }
    render() {
        return (
            <Form>
                <Form.Input>
                    <Label htmlFor="username">Username:</Label>
                    <input type="text" placeholder="Käyttäjä" name="username" onChange={this.onChange} value={this.state.username} />
                    <Label>Please enter a value</Label>
                </Form.Input>
                <Form.Field>
                    <Label htmlFor="password">Password:</Label>
                    <input type="password" placeholder="Salasana" name="password" onChange={this.onChange} value={this.state.password} />
                    <Label pointing>Please enter a value</Label>
                </Form.Field>
                <Button onClick={this.onClick} name="register" icon="signup">Register</Button>
                <Button onClick={this.onClick} name="login">Login</Button>
            </Form>
        )
    }
}