import React from 'react';
import {Singup} from './Singup';
import Page from './Page';
import firebase from 'firebase';
import { Button, Form , Card, Loader} from 'semantic-ui-react'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            sayfa:1,
            loading : false,
        }
    }
    kaydol=()=>{
        this.setState({sayfa:0});
    }
    Giris=()=>{
        this.setState({                  
            loading:true
        })  
        console.log(this.state.email + ' + ' + this.state.password);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                    localStorage.setItem('email', this.state.email)
                    localStorage.setItem('password', this.state.password)
                    localStorage.setItem('STATUS', true)
                    localStorage.setItem('uid',firebase.auth().currentUser.uid)
                this.setState({                  
                    sayfa:2,
                    loading:false
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
        if(this.state.loading){
            return( <Loader active/>)     
        }
        return(
            //Login Paneli
            <Card style={{ padding: '2%' , margin:'auto', marginTop:'20%' }}>
                <Card.Header>Giriş</Card.Header>
                <hr></hr>
                <Form>
                    <Form.Field>
                        <label>Eposta</label>
                        <input value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder='Eposta'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Şifre</label>
                        <input type="password" value={this.state.pass} onChange={(e)=>{this.setState({password:e.target.value})}} placeholder='Şifre' />
                    </Form.Field>
                </Form>
                <Card.Content extra>
                <Button inverted color='green' onClick={this.Giris} style={{marginLeft:'70%'}} >Giris</Button>
                <hr/>
          <p  style={{textAlign:'center'}}>Yenimi giriyon ? <a onClick={()=>{this.setState({sayfa:0})}}>Kaydol</a></p>                      </Card.Content>
            </Card>
        )
    }
}
export default Login;