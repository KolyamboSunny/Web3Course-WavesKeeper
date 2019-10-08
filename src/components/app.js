import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this)
    }

    authFunc(){
        const authData = {data: "Auth on my site"}
        if (WavesKeeper){
            WavesKeeper.auth(authData)
            .then(auth=>{
                console.log(auth) // print successful auth to console
            }).catch(error=>{
                console.error(error) // if auth went wrong, show error in console
            })        
        }else{
            alert("WavesKeeper needs to be installed for auth")
        }
    }

    render(){
        return (
            <div className = "container">
                <input className="btn btn-primary" type="submit" value="Auth" 
                    onClick = {this.authFunc}
                />
            </div>
        )
    }
}

const app = document.getElementById('app')
if(app){
    ReactDOM.render(<App/>,app);
}