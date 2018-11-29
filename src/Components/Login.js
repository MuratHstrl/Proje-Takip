import React from 'react';
import {Singup} from './Singup';
import Projects from './Projepage';
import firebase from 'firebase';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            sayfa:1
        }
    }
    kaydol=()=>{
        this.setState({sayfa:0});
    }
    Giris=()=>{
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
                alert('Giriş Başarılı Devam Etmek için Tamam a basınız')
                this.setState({                  
                    sayfa:2
                })
            }).catch((err)=>{
                alert(err)
            })
    }
    render(){
        if(this.state.sayfa === 0)
        {
            return(<Singup></Singup>)
        }
        else if (this.state.sayfa === 2)
        {
            return(<Projects id={firebase.auth().currentUser.uid}></Projects>)
        }
        return(
            //Login Paneli
            <div style={{margin:'auto', width:'20%' ,backgroundColor:'white', marginTop:'35%'}}>
            <div class="ui middle aligned center aligned grid">
            <div class="column">
            <h2 class="ui teal image header">
            <div class="content">
             Login
            </div>
            </h2>
        <form class="ui large form">
            <div class="ui stacked segment">
            <div class="field">
            <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="email" name="emailsi" placeholder="E-mail" onChange={(e)=>{this.setState({email:e.target.value})}}/>
            </div>
            </div>
            <div class="field">
            <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
            </div>
            </div>
            <button class="ui fluid large teal submit button" onClick={this.Giris} >Giriş</button>
            </div>
            <div class="ui error message"></div>
        </form>
            <div class="ui message">
            Yeni mi kullanıyosun ? <a onClick={this.kaydol} >Kaydol</a>
            </div>
            </div>
            </div>
            </div>
            //------------------------------------------------------------
        )
    }
}
export default Login;