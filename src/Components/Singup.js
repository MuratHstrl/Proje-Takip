import React from 'react';
import firebase from 'firebase';
import { error } from 'util';
import Login from './Login';
export class Singup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            sayfa:0
        }
    }
    kaydet=()=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            alert('Giriş Yaptınız')
            this.setState({
                email:'',
                password:'',
                sayfa:1
            })
        }).catch((err)=>{
           alert(err)        
        })
    }
    Kaydetemail=(e)=>{
            this.setState({email:e.target.value});
    }
    KaydetPassword=(e)=>{
            this.setState({password:e.target.value});
    }
render(){
    if(this.state.sayfa === 1)
    {
        return(<Login></Login>)
    }
    return(
        //Login Paneli
        <div style={{margin:'auto', width:'20%' ,backgroundColor:'white', marginTop:'35%'}}>
        <div class="ui middle aligned center aligned grid">
        <div class="column">
        <h2 class="ui teal image header">
        <div class="content">
         Register
        </div>
        </h2>
    <form class="ui large form">
        <div class="ui stacked segment">
        <div class="field">
        <div class="ui left icon input">
        <i class="user icon"></i>
        <input type="email" name="emailad" placeholder="E-mail" onChange={this.Kaydetemail}/>
        </div>
        </div>
        <div class="field">
        <div class="ui left icon input">
        <i class="lock icon"></i>
        <input type="password" name="password" placeholder="Password" onChange={this.KaydetPassword}/>
        </div>
        </div>
        <button class="ui fluid large teal submit button" onClick={this.kaydet} >Kaydol</button>
        </div>
        <div class="ui error message"></div>
    </form>      
        </div>
        </div>
        </div>
        //------------------------------------------------------------
    )
}
}