import React from 'react';
import { Form ,  Button } from 'semantic-ui-react';
import firebase from 'firebase';
class Projepage extends React.Component{
constructor(props){
    super(props);
    this.state={
        Pa:'',
        Pbt:'',
        Pgl:'',
        Phu:'',
        Pmgl:'',
        Pal:'',
        Pya:'',
        Paa:'',
        kuid:'',
        Pbmbm:'',
        /*  Pa : Proje adı
            Pbt : Proje başlama tarihi
            Pgl : Proje git linki
            Phu : Proje Hostin Url
            Pmgl : Proje mobil git linki
            Pal : Projenin apk linki
            Pya : Projenin yapılış amacı
            Paa : Proje açıklaması
            kuid : Kullanıcı Uid si
            Pbmbm : Projenin durumu

            0 : Bitmemiş
            1 : Bitmiş
        */
    }
}
Dataadd=()=>{
firebase.database().ref('Data/'+ this.state.kuid).push({
    Pa:this.state.Pa,
    Pbt:this.state.Pbt,
    Pgl:this.state.Pgl,
    Phu:this.state.Phu,
    Pmgl:this.state.Pmgl,
    Pal:this.state.Pal,
    Pya:this.state.Pya,
    Paa:this.state.Paa,
  //  kuid:this.state.kuid,
    Pbmbm:0,
}).then(()=>{
    alert('Projeniz eklendi') 
    this.setState({
        Pa:'',
        Pbt:'',
        Pgl:'',
        Phu:'',
        Pmgl:'',
        Pal:'',
        Pya:'',
        Paa:'',
        Pbmbm:'',
    })
}).catch((err)=>{alert(err)})
}
componentWillMount(){
    const id=localStorage.getItem('uid')
this.setState({
    kuid:id
})
}
render(){
    return(
        <div style={{width:'30%' , margin:'auto'}}>
            <h2 style={{textAlign:'center'}}>Proje Ekle</h2>
            <hr/>
            <Form>
    <Form.Field>
      <label>Proje adı</label>
      <input placeholder='Proje adı' value={this.state.Pa} onChange={(e)=>{this.setState({Pa:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje başlama tarihi</label>
      <input type='date' value={this.state.Pbt} placeholder='Proje başlama tarihi' onChange={(e)=>{this.setState({Pbt:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje git linki</label>
      <input placeholder='Proje git linki'value={this.state.Pgl} onChange={(e)=>{this.setState({Pgl:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje Hostin Url</label>
      <input placeholder='Proje Hostin Url' value={this.state.Phu} onChange={(e)=>{this.setState({Phu:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje mobil linki</label>
      <input placeholder='Proje mobil git linki' value={this.state.Pmgl} onChange={(e)=>{this.setState({Pmgl:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Projenin apk linki</label>
      <input placeholder='Projenin apk linki' value={this.state.Pal} onChange={(e)=>{this.setState({Pal:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje yapılış amacı</label>
      <input placeholder='Proje yapılış amacı' value={this.state.Pya} onChange={(e)=>{this.setState({Pya:e.target.value})}}/>
    </Form.Field>
    <Form.Field>
      <label>Proje açıklaması</label>
      <textarea placeholder='Proje açıklaması' value={this.state.Paa} onChange={(e)=>{this.setState({Paa:e.target.value})}}/>
    </Form.Field>
  <Button style={{marginLeft:'85%'}} inverted color='green' onClick={this.Dataadd}>Ekle</Button>
  </Form>
  
           
            
        </div>
    )
}
}
export default Projepage;