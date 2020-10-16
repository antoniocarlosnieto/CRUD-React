import React, {Component} from "react";

class Login extends Component{
    constructor(){
        super();
        this.setState = {data:{}}
    }
    componentDidMount(){
        fetch("https://api.github.com/users/antoniocarlosnieto/repos")
        .then((response) => {response.json()})
        .then( (data) => {this.setState({data:data})})

    }
     
    
    render(){
        return (
        <div>Nome de Usuário: {this.state.data.login}</div>
        );
    }
}

export default Login;