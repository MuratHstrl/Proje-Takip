import React from 'react';
import {Singup} from './Singup';
import Page from './Page';
import firebase from 'firebase';
import { Button, Form } from 'semantic-ui-react'
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
        console.log(this.state.email + ' + ' + this.state.password);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                    localStorage.setItem('email', this.state.email)
                    localStorage.setItem('password', this.state.password)
                    localStorage.setItem('STATUS', true)
                    localStorage.setItem('uid',firebase.auth().currentUser.uid)
                this.setState({                  
                    sayfa:2
                })              
            }).catch((err)=>{
                alert(err)
            })
    }
  /*  componentWillMount(){
        if (localStorage.getItem('STATUS')) {
            firebase.auth().signInWithEmailAndPassword(localStorage.getItem('email'), localStorage.getItem('password'))
                .then(() => {
                    this.setState({                  
                        sayfa:2
                    }) 
                }).catch((err)=>{
                    alert(err)
                })
    }}*/
    render(){
        if(this.state.sayfa === 0)
        {
            return(<Singup></Singup>)
        }
        else if (this.state.sayfa === 2)
        {          
            return(<Page></Page>)
            
        }
        return(
            //Login Paneli
            <div style={{margin:'auto', width:'20%' ,backgroundColor:'white', marginTop:'35%', borderRadius:'2px'}}>
            <p style={{textAlign:'center'}}><h3>Login</h3></p>
            <hr/>
            <Form>
            <Form.Field>
              <label>E-posta</label>
              <input type='email' placeholder='e-posta' onChange={(e)=>{this.setState({email:e.target.value})}} />
            </Form.Field>
            <Form.Field>
              <label>Şifre</label>
              <input type='password' placeholder='şifre' onChange={(e)=>{this.setState({password:e.target.value})}} />
            </Form.Field>
            <Button inverted color='green' onClick={this.Giris} style={{marginLeft:'70%'}} >Giris</Button>
          </Form>
          <hr/>
          <p  style={{textAlign:'center'}}>Yenimi giriyon ? <a onClick={()=>{this.setState({sayfa:0})}}>Kaydol</a></p> 
            </div>
            //------------------------------------------------------------
        )
    }
}
export default Login;