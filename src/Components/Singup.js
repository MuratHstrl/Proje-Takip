import React from 'react';
import firebase from 'firebase';
import Login from './Login';
import { Button, Form , Card} from 'semantic-ui-react';
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
            alert('Kayıt Oluşturuldu')
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
        <Card style={{ padding: '2%' , margin:'auto', marginTop:'20%' }}>
                <Card.Header>Sing-up</Card.Header>
                <hr></hr>
                <Form>
                    <Form.Field>
                        <label>Eposta</label>
                        <input type='email' placeholder='e-posta' onChange={this.Kaydetemail}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Şifre</label>
                        <input type="password"  placeholder='şifre' onChange={this.KaydetPassword} />
                    </Form.Field>
                </Form>
                <Card.Content extra>
                <Button inverted color='green' onClick={this.kaydet} style={{marginLeft:'68%'}} >Kaydol</Button>                     </Card.Content>
            </Card>   
        //------------------------------------------------------------
    )
}
}